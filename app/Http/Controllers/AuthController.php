<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:25',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if ($user->save())
        {
            return response()->json([
                'message' => 'User Register Successfully!!',
                'status_code' => 201
            ],201);
        }else{
            return response()->json([
                'message' => 'User Register failed!!',
                'status_code' => 500
            ],500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
            return response()->json([
                'message' => 'Email And password Does Not Exist In Our Record',
                'status_code' => 401
            ],401);
        }

        $user = $request->user();

        if ($user->role == 'admin')
        {
            $tokenData = $user->createToken('Personal Access Tokens', ['admin']);
        }else{
            $tokenData = $user->createToken('Personal Access Tokens', ['user']);
        }

        $token = $tokenData->token;

        if ($request->remember_me)
        {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save())
        {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ],200);
        }else{
            return response()->json([
                'message' => 'Login failed',
                'status_code' => 500
            ],500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Logout Successfully',
            'status_code' => 200
        ],200);
    }

    public function profile(Request $request)
    {
        if ($request->user())
        {
            return response()->json($request->user(),200);
        }

        return response()->json([
            'message' => 'Logged In failed',
            'status_code' => 500
        ],500);
    }

    public function resetPasswordRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user)
        {
            return response()->json([
                'message' => 'We have send a verification code to your email address',
                'status_code' => 200
            ],200);
        }else{
            $random = rand(111111, 999999);
            $user->verification_code = $random;

            if ($user->save())
            {
                $userData = array(
                    'email' => $user->email,
                    'full_name' => $user->name,
                    'random' => $random
                );

                Mail::send('emails.reset_password', $userData, function ($message) use ($userData){
                    $message->from('no-reply@laravel.vue', 'Password request');

                    $message->to($userData['email'], $userData['full_name']);

                    $message->subject('Reset Password request (Laravel Vue)');
                });

                if (Mail::failures())
                {
                    return response()->json([
                        'message' => 'Some Error occurred',
                        'status_code' => 500
                    ],500);
                }else{
                    return response()->json([
                        'message' => 'We have send a verification code to your email address',
                        'status_code' => 200
                    ],200);
                }
            }else{
                return response()->json([
                    'message' => 'Some Error occurred',
                    'status_code' => 500
                ],500);
            }

        }
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'verification_code' => 'required|integer',
            'password' => 'required|confirmed|min:6',
        ]);

        $user = User::where('email', $request->email)->where('verification_code', $request->verification_code)->first();

        if (!$user)
        {
            return response()->json([
                'message' => 'User not found/invalid',
                'status_code' => 401
            ],401);
        }else{

            $user->password = bcrypt(trim($request->password));
            $user->verification_code = null;


            if ($user->save())
            {

                return response()->json([
                    'message' => 'Password Updated Successfully',
                    'status_code' => 200
                ],200);

            }else{
                return response()->json([
                    'message' => 'Some Error occurred',
                    'status_code' => 500
                ],500);
            }

        }
    }
}

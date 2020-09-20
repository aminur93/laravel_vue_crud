<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $brand = Brand::get();
        return response()->json(['brand' => $brand],200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:brands|min:3'
        ]);

        if ($request->isMethod('post'))
        {
            $brand = new Brand();

            $brand->name = $request->name;

            if ($brand->save())
            {
                return response()->json([
                    'message' => 'Brand stored Successfully',
                    'status_code' => 200
                ], 200);
            }else{
                return response()->json([
                    'message' => 'Someting Went Problem',
                    'status_code' => 500
                ], 500);
            }
        }
    }
}

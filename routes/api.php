<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function(){

    Route::post('register','AuthController@register');

    Route::post('login','AuthController@login');

    Route::post('reset-password-request','AuthController@resetPasswordRequest');

    Route::post('reset-password','AuthController@resetPassword');

    Route::group(['middleware' => 'auth:api'], function(){

        Route::get('logout','AuthController@logout');

        Route::get('profile','AuthController@profile');

    });

});

Route::group(['middleware' => 'auth:api'], function(){

    Route::group(['middleware' => 'scope:user'], function(){

    });

    Route::group(['middleware' => 'scope:admin'], function(){

        //category route
        Route::resource('category','CategoryController');

        //brand routes
        Route::get('brand','BrandController@index');
        Route::post('brand/store','BrandController@store');

        //product routes
        Route::resource('product','ProductController');
        Route::get('get-categories','ProductController@categories');
        Route::get('export-product','ProductController@exportProduct');
        Route::get('pdfProductExport','ProductController@exportPdfProduct');
        Route::post('import-product','ProductController@importProduct');

    });


});






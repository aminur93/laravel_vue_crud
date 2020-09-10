<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->paginate(2);

        return response()->json($categories, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3',
            'image' => 'required|image|mimes:jpg,jpeg,png'
        ]);

        $category = new Category();
        $category->name = $request->name;

        $path = $request->file('image')->store('categories_image');

        $category->image = $path;

        if($category->save())
        {
            return response()->json([
                'status' => 1,
                'message' => 'Category Store Successfully',
                'category' => $category
            ],200);
        }else{
            return response()->json([
                'status' => 0,
                'message' => 'Store Failed'
            ],500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:3'
        ]);

        //$category = Category::findOrFail($category);

        $category->name = $request->name;
        $oldPath = $category->image;

        if($request->hasFile('image'))
        {
            $request->validate([
                'image' => 'required|image|mimes:jpg,jpeg,png'
            ]);

            $path = $request->file('image')->store('categories_image');
            $category->image = $path;

            Storage::delete($oldPath);
        }

        if($category->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Category Updated Successfully',
                'category' => $category
            ],200);
        }else{
            Storage::delete($path);
            return response()->json([
                'status' => 500,
                'message' => 'Updated Failed'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->delete())
        {
            Storage::delete($category->image);

            return response()->json([
                'message' => 'category Delete Successfully!',
                'status_code' => 200
            ],200);
        }else{
            return response()->json([
                'message' => 'Some Problem Occured',
                'status_code' => 500
            ],500);
        }
    }
}

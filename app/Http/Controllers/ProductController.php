<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function categories()
    {
        $categories = Category::get();

        return response()->json($categories,200);
    }

    public function index()
    {
        $product = Product::with('category')->latest()->paginate(2);


        return response()->json($product,200);
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
            'category_id' => 'required',
            'name' => 'required|string|max:100',
            'image' => 'required|image|mimes:jpg,jpeg,png'
        ]);

        if ($request->isMethod('post'))
        {
            $product = new Product();

            $product->category_id = $request->category_id;
            $product->name = $request->name;

            $path = $request->file('image')->store('products_image');

            $product->image = $path;

            if ($product->save())
            {
                return response()->json([
                    'message' => 'Product Stored Successfully',
                    'products' => $product,
                    'status_code' => 200
                ],200);
            }else{
                return response()->json([
                    'message' => 'Product Store Failed',
                    'status' => 500
                ],500);
            }

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:100',
        ]);


        $product->category_id = $request->category_id;
        $product->name = $request->name;
        $oldPath = $product->image;

        if($request->hasFile('image'))
        {
            $request->validate([
                'image' => 'required|image|mimes:jpg,jpeg,png'
            ]);

            $path = $request->file('image')->store('products_image');
            $product->image = $path;

            Storage::delete($oldPath);
        }

        if($product->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Product Updated Successfully',
                'product' => $product
            ],200);
        }else{
            Storage::delete($path);
            return response()->json([
                'status' => 500,
                'message' => 'Product Updated Failed'
            ],500);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->delete())
        {
            Storage::delete($product->image);

            return response()->json([
                'message' => 'Product Delete Successfully!',
                'status_code' => 200
            ],200);
        }else{
            return response()->json([
                'message' => 'Some Problem Occured',
                'status_code' => 500
            ],500);
        }
    }

    public function exportProduct()
    {
        $product = DB::table('products')
            ->select(
                'products.id',
                'categories.name as cname',
                'products.name as name',
                'products.image as image'
            )
            ->join('categories','products.category_id','=','categories.id')
            ->get()
            ->toArray();

        if (!count($product))
        {
            return response()->json([
                'message' => 'Product data is empty',
                'status_code' => 500
            ],500);
        }

        $products[] = ['Category Name','Name','Image'];

        foreach ($product as $p)
        {
            $products[] = [
                'cat_name' => $p->cname,
                'name' => $p->name,
                'image' => $p->image
            ];
        }

        //return $products;


         Excel::create('excel_data', function($excel) use ($products) {
            $excel->sheet('mySheet', function($sheet) use ($products)
            {
                $sheet->fromArray($products, null, 'A1', false, false);
            });
        })->download('xlsx');

    }

    public function exportPdfProduct()
    {
        $product = DB::table('products')
            ->select(
                'products.id',
                'categories.name as cname',
                'products.name as name',
                'products.image as image'
            )
            ->join('categories','products.category_id','=','categories.id')
            ->get()
            ->toArray();

        if (!count($product))
        {
            return response()->json([
                'message' => 'Product data is empty',
                'status_code' => 500
            ],500);
        }


        $pdf = PDF::loadView('pdf', compact('product'));

        return $pdf->download('product.pdf');
    }

    public function importProduct(Request $request)
    {
        $request->validate([
            'import_file' => 'required|mimes:xls,xlsx'
        ]);

        $path = $request->file('import_file')->getRealPath();

        $data = Excel::load($path)->get();

        //return $data;

        if($data->count() > 0)
        {

            foreach ($data as $key => $value)
            {
                $arr[] = [
                    'category_id' => $value->category_id,
                    'name' => $value->name,
                    'image' => $value->image
                ];
            }

            if(!empty($arr))
            {
                $product = Product::insert($arr);

                return response()->json([
                    'message' => 'Product Imported Successfully',
                    'status_code' => 200,
                    'product' => $product
                ],200);
            }
        }

        return response()->json([
            'message' => 'Product is not Imported! Something went wrong',
            'status_code' => 500
        ],500);

    }

}

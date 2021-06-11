<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ReturnPolicy;
use Illuminate\Http\Request;

class ProductController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(ReturnPolicy::all()->isEmpty()) {
            ReturnPolicy::create([
                'return_policy' => 0,
                'duration' => '0'
            ]);
        } 
        return  ['product' => Product::with('stocks', 'discounts', 'images')->get(), 'returnpolicy' => ReturnPolicy::find(1)];
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
            'name' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
            'category' => 'required',
            'attribute' => 'required',
            'stocks' => 'required|numeric',
            //'discounts' => 'required|numeric'
        ]);

        $product = Product::create($request->only('name','price','description', 'tag', 'category', 'attribute'));
        
        $product->stocks()->create([
            'quantity' => $request->stocks,
            'product_id' => $product->id
        ]);

        $product->discounts()->create([
            //'discount' => $request->discounts,
            'product_id' => $product->id
        ]);

        if($request->hasFile('images'))
        {
            foreach( $request->file('images') as $file)
            {
                $file->store('public/products');
                $product->images()->create([
                    'product_id' => $product->id,
                    'file_path'  => $file->hashName()
                ]);
            }
        } // a retenir.
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return  ['product' => Product::with('images', 'stocks', 'discounts')->find($id), 'returnpolicy' => ReturnPolicy::find(1)];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::find($id)->delete();
    }
}

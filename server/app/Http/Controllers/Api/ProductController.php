<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
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

        $collection =  Product::with('stocks', 'discounts', 'images', 'comments')->get();
        $mappedCollection = $collection->map(function ($item){
            return $item->setAttribute('policy',ReturnPolicy::find(1));
        })->map(function ($item) {
            $pivot = Product::find($item->id);
            return $item->setAttribute('pivot', $pivot->categories);
        });

        return $mappedCollection;
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
            'details' => 'required',
            'stocks' => 'required|numeric',
            //'discounts' => 'required|numeric'
        ]);

        $product = Product::create($request->only('name','price','description', 'details'));
        
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
        }
        $productCategId = Attribute::find($request->get('category_id'));
        $productpivot = Product::find($product->id);
        $productpivot->categories()->attach($productCategId);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collection =  Product::with('stocks', 'discounts', 'images', 'comments')->find($id)->setAttribute('policy',ReturnPolicy::find(1));
        $pivot = Product::find($id);
        return $collection->setAttribute('pivot', $pivot->categories);
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

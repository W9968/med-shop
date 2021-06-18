<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use App\Models\Brand;
use App\Models\Product;
use App\Models\ReturnPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        })->map((function ($item) {
            return $item->setAttribute('tag',Brand::find($item->brand_id));
        }));

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
        ]);

        $product = Product::create($request->only('name','price','description', 'details', 'brand_id'));
        
        $product->stocks()->create([
            'quantity' => $request->stocks,
            'product_id' => $product->id
        ]);

        $product->discounts()->create([
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
        $product = Product::find($id);

        foreach($product->images as $oneImage)
        {
            unlink(storage_path('app/public/products/'.$oneImage->file_path));
            $product->images()->delete($oneImage->id);
        }

        $product->update($request->only('name','price','description', 'details'));

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

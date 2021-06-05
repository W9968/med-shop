<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\NewProductNotifications;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DiscountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::with('discounts', 'images')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::with('images', 'discounts')->find($id);
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

        // Mail::send('emails.productNotifiable', ['product' => Product::find($id)->name], function ($message) {
        //     $message->subject('new product');
        //     $message->to('wale@mail.com', 'wale');
        // });

        foreach ( User::where('id' , '!=', 1)->get('email') as $user )
        {
            Mail::to($user)->send(new NewProductNotifications(Product::find($id)));
        }
        

        $discount = Product::find($id);
        $discount->discounts->discount = $request->discount;
        $discount->push();
        return $discount;
    }

}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facture;
use App\Models\Orders;
use App\Models\Status;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Carbon\Factory;
use Stripe;
use Stripe\Order;

use function PHPSTORM_META\map;

class PaymentController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function creditCharge(Request $request)
    {
        // $user = Auth::user();
        $stripe = new Stripe\StripeClient('sk_test_51I4STaBEBLmRHvyUH5uWV4MKsqOd9NzQqB4ETeg69Gfzgz65hqdY3z1bF9xZhW1WnZh10wK4fG3UF2wnP7eybGkE00YrQO4Tv6');
       
        try {
            $stripe = $stripe->charges->create([
                'amount' => $request->amount,
                'currency' => 'gbp',
                'source' => 'tok_mastercard'
              ]);
              return $stripe;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 500]);
        }  
    }

    public function paymentFacture(Request $request)
    {
        $request->validate([
            'transaction_id' => 'required',
            'payment_methode' => 'required',
            'amount_to_pay' => 'required|numeric',
            'country' => 'required',
            'state' => 'required',
            'postal_code' => 'required|max:10',
            'phone_number' => 'required|min:6',
            'line1' => 'required', 
            'returnable' => 'required'
        ]);

        $facture = Facture::create([
            'transaction_id' => $request->transaction_id,
            'payment_methode' => $request->payment_methode,
            'amount_to_pay' => $request->amount_to_pay,
            'country' => $request->country,
            'state' => $request->state,
            'postal_code' => $request->postal_code,
            'phone_number' => $request->phone_number,
            'line1' => $request->line1,
            'line2' => $request->line2,
            'returnable' => $request->returnable,
            'user_id' =>  Auth::user()->id
        ]);

      
        $cart = $request->get('cart');
        
        foreach(json_decode($cart) as $item )
        {
            $facture->orders()->create([
                'price' => $item->price,
                'quantity' => $item->quantity,
                'product_id' => $item->id,
                'facture_id' => $facture->id,
            ]);
        }

        $facture->stateorder()->create([
            'facture_id' => $facture->id
        ]);
        
      
    }


    public function getAllFactures()
    {
        // $collection =  Facture::with('orders')->get();
        // $mappedCollection = $collection->map(function ($item){
        //     return $item->setAttribute('user',User::find($item->user_id));
        // });
        // return $mappedCollection;

        return Facture::with('orders')->stateorder()->get();
    }

    public function getAuthedUserFactureList()
    {
        $user = Auth::user();
        return Facture::where("user_id", "=", $user->id)->orderby('id', 'desc')->get();
    }

}

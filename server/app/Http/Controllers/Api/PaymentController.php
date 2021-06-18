<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

use Stripe;

class PaymentController extends Controller
{
    public function pay(Request $request)
    {
        // $user = Auth::user();
        $stripe = new Stripe\StripeClient('sk_test_51I4STaBEBLmRHvyUH5uWV4MKsqOd9NzQqB4ETeg69Gfzgz65hqdY3z1bF9xZhW1WnZh10wK4fG3UF2wnP7eybGkE00YrQO4Tv6');
       
        try {    
            $stripe = $stripe->paymentIntents->create([
                "amount" => $request->amount,
                "currency" => "EUR",
                'payment_method_types' => ['card'],
            ]);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 500]);
        }  
    }
}

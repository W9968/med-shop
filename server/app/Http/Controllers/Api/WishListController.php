<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WishList;
use Illuminate\Http\Request;
use Auth;

class WishListController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return Wishlist::where("user_id", "=", $user->id)->orderby('id', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, array(
            //'user_id'=>'required',
            'product_id' =>'required',
        ));
           
        $status=Wishlist::where('user_id',Auth::user()->id)->where('product_id',$request->product_id)->first();
           
        if(isset($status->user_id) and isset($request->product_id))
            {
                return ['message' => 'item already stored'];
              }
              else
              {
                $wishlist = new Wishlist;

                //$wishlist->user_id = $request->user_id;
                $wishlist->user_id = Auth::user()->id;
                $wishlist->product_id = $request->product_id;
                $wishlist->save();

        return $wishlist;
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
        $wishlist = WishList::find($id);
        $wishlist->delete();
    }
}

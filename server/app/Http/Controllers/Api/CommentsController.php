<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comments;
use App\Models\Product;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\DB;

class CommentsController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth']);
    }

    /**
     * show the comments related to a product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function showComment($id)
    {
        return Product::with('comments', 'images')->find($id);
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
            'comment' => 'required',
            'product_id' => 'required'
        ));

        $comment = new Comments();
        $comment->comment = $request->comment;
        $comment->user_id = Auth::user()->id;
        $comment->user_name = Auth::user()->name;
        $comment->product_id = $request->product_id;
        $comment->save();
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
        $comment = Comments::find($id);
        $comment->update($request->only('comment'));
        $comment->save();
        return $comment; 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comments::find($id);
        $comment->delete();
    }
}

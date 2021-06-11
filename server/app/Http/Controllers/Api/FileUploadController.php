<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function uploadFile(Request $request)
    {
        if($request->hasFile('images'))
        {
            foreach($request->file('images') as $file)
            {
                $file->store('public/images');
            }
        }
    }
}

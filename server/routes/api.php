<?php

use App\Http\Controllers\Api\BlogController;
use App\Models\User;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/post', [BlogController::class, 'index']);
Route::post('/post', [BlogController::class, 'store']);
Route::delete('/post/{id}', [BlogController::class, 'destroy']);
Route::delete('/post', [BlogController::class,'turncate']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes(['verify' => true]);


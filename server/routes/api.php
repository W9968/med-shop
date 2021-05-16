<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReturnPolicyController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\AuditsController;
// use App\Models\Brand;
// use App\Models\User;
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

// user routes
Route::get('/customer', [UserController::class, 'index']);

// product routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);


// brand routes
Route::get('/brands', [BrandController::class, 'index']);
Route::get('/brands/{id}', [BrandController::class, 'show']);
Route::post('/brands', [BrandController::class, 'store']);
Route::put('/brands/{id}', [BrandController::class, 'update']);
Route::delete('/brands/{id}', [BrandController::class, 'destroy']);

//blog routes
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{id}', [BlogController::class, 'show']);
Route::post('/blogs', [BlogController::class, 'store']);
Route::delete('/blogs/{id}', [BlogController::class, 'destroy']);

// get current user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// get audit lgos
Route::get('/logs', [AuditsController::class, 'showAdminLogs']);
Route::get('/logs/customer', [AuditsController::class, 'showCustomerLogs']);

// return policy 
Route::get('returnpolicy', [ReturnPolicyController::class, 'show']);
Route::put('returnpolicy', [ReturnPolicyController::class, 'update']);

// check if route is verified to pass
Auth::routes(['verify' => true]);

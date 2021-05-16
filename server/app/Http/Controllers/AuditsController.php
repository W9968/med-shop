<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AuditsController extends Controller
{
    /**
     * Display a listing of the resource.
     * Admin function
     * @return \Illuminate\Http\Response
     */
    public function showAdminLogs()
    {
        // dd( DB::table('audits')->where('user_id', '=', 0)->get());
        return DB::table('audits')->where('user_id', '=', 1)->get();
    }

    /**
     * Display a listing of the resource.
     * customer function
     * @return \Illuminate\Http\Response
     */
    public function showCustomerLogs()
    {
        dd(DB::table('audits')->where('user_id', '!=', 1)->get());
    }

}

<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Comptech\Auth\Auth;

class AuthController extends Controller
{

    public function index(Request $request)
    {
        return view('Login.index');
    }

    public function login($role = NULL, Request $request)
    {
        return Auth::login($request, $role);
    }

    public function logout()
    {
        return Auth::logout();
    }

}

<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Countries\Country;

class CountriesController extends Controller
{

    public function getRecords(Request $request) {

        return Country::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Country::actionDispatch($action, $request->all());
    }

}

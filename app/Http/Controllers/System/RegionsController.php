<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Regions\Region;

class RegionsController extends Controller
{

    public function getRecords(Request $request) {
        return Region::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Region::actionDispatch($action, $request->all());
    }

}

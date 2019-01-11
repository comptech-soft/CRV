<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Localities\Locality;

class LocalitiesController extends Controller
{

    public function getRecords(Request $request) {
        return Locality::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Locality::actionDispatch($action, $request->all());
    }

}

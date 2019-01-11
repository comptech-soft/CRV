<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Judete\Judet;

class JudeteController extends Controller
{

    public function getRecords(Request $request) {
        return Judet::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Judet::actionDispatch($action, $request->all());
    }

}

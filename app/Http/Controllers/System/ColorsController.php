<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Colors\Color;

class ColorsController extends Controller
{

    public function getRecords(Request $request) {

        return Color::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Color::actionDispatch($action, $request->all());
    }

}

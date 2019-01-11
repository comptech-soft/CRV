<?php

namespace App\Http\Controllers\Farms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Farms\Farms\Farm;

class FarmsController extends Controller
{

    public function getRecords(Request $request) {
        return Farm::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Farm::actionDispatch($action, $request->all());
    }

}

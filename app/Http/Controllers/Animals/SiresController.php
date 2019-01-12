<?php

namespace App\Http\Controllers\Animals;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Animals\Sires\Sire;

class SiresController extends Controller
{

    public function getRecords(Request $request) {
        return Sire::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Sire::actionDispatch($action, $request->all());
    }

}

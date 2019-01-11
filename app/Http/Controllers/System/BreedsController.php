<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Breeds\Breed;

class BreedsController extends Controller
{

    public function getRecords(Request $request) {
        return Breed::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return Breed::actionDispatch($action, $request->all());
    }

}

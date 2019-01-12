<?php

namespace App\Http\Controllers\Animals;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Animals\Animals\Animal;

class AnimalsController extends Controller
{

    public function getRecords(Request $request) {
        return Animal::getRecords($request->all());
    }

}

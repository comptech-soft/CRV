<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\System\Companies\Company;

class CompaniesController extends Controller
{

    public function getRecords(Request $request) {

        return Company::getRecords($request->all());
    }

}

<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Comptech\Files\Upload;

class UploadController extends Controller
{
    public function uploadImage(Request $request)
    {
        return Upload::ToAWSS3($request);
    }
}
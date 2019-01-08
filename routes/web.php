<?php

Route::get('/', function () {
    return view('index');
});

// Route::namespace('Comptechsoft\Appcore\Controllers')->group(function(){

    

// });

Route::post('get-app-configs', 'App\ConfigController@getConfig');
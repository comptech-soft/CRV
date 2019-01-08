<?php

Route::get('/', function () {
    return view('App.index');
});

// Route::namespace('Comptechsoft\Appcore\Controllers')->group(function(){

    

// });

Route::post('get-app-configs', 'App\ConfigController@getConfig');


/*
| neautentificati
*/
Route::middleware(['is-unauthenticated'])->group(function(){
    Route::get('login', 'App\AuthController@index')->name('login-index');
    Route::post('login', 'App\AuthController@login')->name('app-login-by-role');
});
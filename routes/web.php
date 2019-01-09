<?php

Route::get('/', function () {
    return view('App.index');
})->name('welcome');

Route::post('get-app-configs', 'App\ConfigController@getConfig');

/*
| neautentificati
*/
Route::middleware(['is-unauthenticated'])->group(function(){

    Route::get('login', 'App\AuthController@index')->name('login-index');
    Route::post('login/{role?}', 'App\AuthController@login')->name('app-login-by-role');

});

/*
| autentificati
*/
Route::middleware(['is-authenticated'])->group(function(){

    Route::post('logout', 'App\AuthController@logout')->name('logout');

});
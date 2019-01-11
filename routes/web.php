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


    Route::post('system/breeds/get-records', 'System\BreedsController@getRecords');
    Route::post('system/breeds/actions/{action}', 'System\BreedsController@actionDispatch');

    Route::post('system/colors/get-records', 'System\ColorsController@getRecords');

    Route::post('system/countries/get-records', 'System\CountriesController@getRecords');

    Route::post('system/companies/get-records', 'System\CompaniesController@getRecords');

});
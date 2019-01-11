<?php

Route::get('/', function () {
    return view('App.index');
})->name('welcome');

Route::post('get-app-configs', 'App\ConfigController@getConfig');
Route::post('upload-image', 'App\UploadController@uploadImage');
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

    /** Sistem */
    Route::post('system/breeds/get-records', 'System\BreedsController@getRecords');
    Route::post('system/breeds/actions/{action}', 'System\BreedsController@actionDispatch');

    Route::post('system/colors/get-records', 'System\ColorsController@getRecords');
    Route::post('system/colors/actions/{action}', 'System\ColorsController@actionDispatch');

    Route::post('system/companies/get-records', 'System\CompaniesController@getRecords');
    Route::post('system/companies/actions/{action}', 'System\CompaniesController@actionDispatch');

    Route::post('system/countries/get-records', 'System\CountriesController@getRecords');
    Route::post('system/countries/actions/{action}', 'System\CountriesController@actionDispatch');

    Route::post('system/regions/get-records', 'System\RegionsController@getRecords');
    Route::post('system/regions/actions/{action}', 'System\RegionsController@actionDispatch');

    Route::post('system/judete/get-records', 'System\JudeteController@getRecords');
    Route::post('system/judete/actions/{action}', 'System\JudeteController@actionDispatch');

    Route::post('system/localities/get-records', 'System\LocalitiesController@getRecords');
    Route::post('system/localities/actions/{action}', 'System\LocalitiesController@actionDispatch');
    
    /** Ferme */
    Route::post('system/farms/get-records', 'Farms\FarmsController@getRecords');
    Route::post('system/farms/actions/{action}', 'Farms\FarmsController@actionDispatch');

    /** Tauri */
    Route::post('system/sires/get-records', 'Sires\SiresController@getRecords');
    Route::post('system/sires/actions/{action}', 'Sires\SiresController@actionDispatch');
});
<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/', function()
{
	return View::make('index');
});

/*
|--------------------------------------------------------------------------
| Todas las rutas apuntan al index.
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Todas las rutas tienen un equivalente en plural q devuelve data.
|--------------------------------------------------------------------------
*/

// Lookbook
Route::get('/lookbook', function()
{
	return View::make('index');
});
Route::get('lookbooks', function()
{
	return Lookbook::all();
});


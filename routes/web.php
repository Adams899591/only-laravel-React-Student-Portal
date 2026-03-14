<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Welcome');
}); 


Route::controller(HomeController::class)->group(function(){
 
  Route::get("login", "loginPage")->name("page.login");
  Route::get("home", "homePage")->name("page.home");
  Route::get("edit/{id}", "EditPage")->name("page.edit");
  Route::get("view/{id}", "ViewPage")->name("page.view");
  Route::get("add", "AddPage")->name("page.add");


  Route::post("update/{id}", "updateStudentData")->name("student.update");


});

require __DIR__.'/auth.php';

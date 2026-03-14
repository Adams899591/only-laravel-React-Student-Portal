<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Welcome');
}); 


Route::middleware(["auth"])->controller(HomeController::class)->group(function(){
 
  Route::get("home", "homePage")->name("page.home");
  Route::get("edit/{id}", "EditPage")->name("page.edit");
  Route::get("view/{id}", "ViewPage")->name("page.view");
  Route::get("add", "AddPage")->name("page.add");


  Route::put("update/{id}", "updateStudentData")->name("student.update");
  Route::post("create", "addStudentData")->name("student.add");
  Route::get("delete/{id}", "deleteStudentData")->name("student.delete");

});


  // this Router handles user login
  Route::get("login", [HomeController::class, "loginPage"])->name("login");
  Route::post("loginUser", [HomeController::class,"loginUserToAccount"] )->name("validate.login");






require __DIR__.'/auth.php';

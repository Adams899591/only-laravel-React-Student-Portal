<?php

namespace App\Http\Controllers;

// use App\Http\Requests\updateStudentDataRequest;
use App\Http\Requests\updateStudentDataRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    
  // this show the login page
  public function loginPage(){
    return Inertia::render("Auth/Login");
  }

    // show home page
    public function homePage(){

        $students = User::where("type", "=", "Student")->paginate(4);

        return Inertia::render("Students/Home",["students" => $students]);
    }

    // this show add page
    public function AddPage(){
        return Inertia::render("Students/Add");
    }

    // this show the view page
    public function ViewPage($id){
        
        $student = User::findOrFail($id);
        return Inertia::render("Students/View",["student" => $student]);
    }

    // this show the edit page
    public function editPage($id){

        $student = User::findOrFail($id);
        return Inertia::render("Students/Edit", ["student" => $student]);
    }

    // this handles edit student data
    public function updateStudentData(updateStudentDataRequest $request, $id){
 
       // find the user
       $student = User::findOrFail($id);
       
       // keep it clean by doing it like this laravel is smart enough to match the key with the database columns
       $student->update($request->validated());
 
        return redirect()->route("page.home")->with("success", "Student data updated successfully");
    }






}

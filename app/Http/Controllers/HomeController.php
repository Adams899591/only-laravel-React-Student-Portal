<?php

namespace App\Http\Controllers;

// use App\Http\Requests\updateStudentDataRequest;

use App\Http\Requests\addStudentDataRequest;
use App\Http\Requests\updateStudentDataRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Resources\ViewPageResource;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class HomeController extends Controller
{
    use AuthorizesRequests;


  // this show the login page
  public function loginPage(){
    return Inertia::render("Login");
  }

   // this login user using name or email and password
   public function loginUserToAccount(){
      // validate the request
      $credentials = request()->validate([
        "name" => "required",
        "password" => "required",
      ]);

        if (Auth::attempt(['name' => $credentials["name"], 'password' => $credentials["password"]])) {
      
                request()->session()->regenerate();
                return redirect()->route("page.home")->with("success", "Logged in successfully");
        }else {
            return redirect()->back()->with("error", "UserName or Password is Incorrect");
        }



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
        
        return Inertia::render("Students/View",["student" => new ViewPageResource($student)]);
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
       
       // ensure the authenticated user is the owner of the data
       $this->authorize("update", $student);

       // keep it clean by doing it like this laravel is smart enough to match the key with the database columns
       $student->update($request->validated());
 
        return redirect()->route("page.home")->with("success", "Student data updated successfully");
    }

    // this handles add student data
    public function addStudentData(addStudentDataRequest $request){

       $data = new User();


       // keep it clean by doing it like this laravel is smart enough to match the key with the database columns
       $data->create($request->validated());
 
        return redirect()->route("page.home")->with("success", "Student data Created successfully");
    }

    // this handles deleting of student data
    public function deleteStudentData($id){

       $data = User::findOrfail($id);

      $data->delete();
 
        return redirect()->route("page.home")->with("success", "Student data Deleted successfully");
      
    }






}

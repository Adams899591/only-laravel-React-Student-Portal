import { usePage, useForm} from "@inertiajs/react";
import React from "react";
import InputError from "@/Components/InputErrors";

export default function Login() {
   const {flash} = usePage().props;

   const {data, setData, post, errors} = useForm({
                                            name : "",
                                            password : "",
                                         });
  
   const handlesLogin = (e) => {
       e.preventDefault();

        post(route("validate.login"));

   }



  return (
    <>
            {/* show error message after add or update or delete student */}
          {flash.error &&
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {flash.error}
          </div> }

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to your account
          </h2>

          <form onSubmit={handlesLogin} className="space-y-4">
            
            {/* name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                value={data.name}
                onChange={(e) => setData("name",e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <InputError message={errors.name} />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={(e) => setData("password",e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputError message={errors.password} />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>

              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Sign In
            </button>
            
          </form>

          {/* Register link */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>

        </div>
      </div>

    </>
  );
}
import React from 'react'
import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/react';
import InputError from "@/Components/InputErrors";

const Add = () => {

     const {data, setData, errors, post} = useForm({
                                                    name: "",
                                                    email: "",
                                                    course: "",
                                                    type: "",
                                                  });

      function handlesAddDataToDatabase(e) {
         e.preventDefault();
         post(route("student.add"))
      }                  

  return (
    
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-6 border-b pb-2">
              <h2 className="text-2xl font-bold text-gray-800">Add New Student</h2>
          </div>
          <form onSubmit={handlesAddDataToDatabase}>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="name"
                      type="text"
                      value={data.name}
                      onChange={(e) => setData("name", e.target.value)}
                      placeholder="Enter student name"
                  />

                  <InputError message={errors.name}/>
              </div>

              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => setData("email", e.target.value)}
                      placeholder="Enter student email"
                  />
                  <InputError message={errors.email}/>
              </div>

              <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                      Course
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="course"
                      type="text"
                      value={data.course}
                      onChange={(e) => setData("course", e.target.value)}
                      placeholder="Enter student course"
                  />
                  <InputError message={errors.course}/>
              </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Select
                  </label>
                  <select name="" id=""  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      value={data.type}
                      onChange={(e) => setData("type", e.target.value)}
                   >
                    <option value="">Sellect something</option>
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                  </select>
                  <InputError message={errors.type}/>
                </div>

                {/* <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Course
                  </label>
                  <select name="" id=""  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      value={data.course}
                      onChange={(e) => setData("course", e.target.value)}
                   >
                    <option value="">Sellect course</option>
                      <option value="Computer Science">Student</option>
                      <option value="English">Teacher</option>
                  </select>
                  <InputError message={errors.course}/>
                </div> */}

              <div className="flex items-center justify-between">
                  <button
                      className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                      type="submit"
                  >
                      Add Student
                  </button>
              </div>

          </form>
      </div>
  )
}

Add.layout = function (page) {
   return <AppLayout>{page}</AppLayout>
}

export default Add
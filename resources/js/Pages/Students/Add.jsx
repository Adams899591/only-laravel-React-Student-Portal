import React from 'react'
import AppLayout from '@/Layouts/AppLayout';

const Add = () => {
  return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-6 border-b pb-2">
              <h2 className="text-2xl font-bold text-gray-800">Add New Student</h2>
          </div>
          <form>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="name"
                      type="text"
                      placeholder="Enter student name"
                  />
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="email"
                      type="email"
                      placeholder="Enter student email"
                  />
              </div>
              <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                      Course
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                      id="course"
                      type="text"
                      placeholder="Enter student course"
                  />
              </div>
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
import React from 'react'
import AppLayout from '@/Layouts/AppLayout';
import { Link, usePage } from '@inertiajs/react';

function View() {
    const {student} = usePage().props;
  

  return (
     <>
  
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Student Details</h2>
            <Link href={route("page.home")} className="text-blue-500 hover:text-blue-800 font-semibold transition duration-200">Back to List</Link>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">ID</label>
            <p className="text-gray-900 text-lg font-medium">X2#{student.id}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">Name</label>
            <p className="text-gray-900 text-lg font-medium">{student.name}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">Email</label>
            <p className="text-gray-900 text-lg font-medium">{student.email}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">Course</label>
            <p className="text-gray-900 text-lg font-medium">{student.course}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}



View.layout = function (page) {
   return <AppLayout>{page}</AppLayout>
}

export default View
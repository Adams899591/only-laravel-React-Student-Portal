import React from 'react'
import AppLayout from '@/Layouts/AppLayout';
import { useForm, usePage } from '@inertiajs/react';
import InputError from "@/Components/InputErrors";

const Edit = () => {
    const {student} = usePage().props;

    const { data, setData, post, errors, processing} = useForm({
                                                           name: student.name,
                                                           email: student.email,
                                                           course: student.course,
                                                        })

    function submitEdictedData(e) {
        e.preventDefault();
        post(route("student.update",{id: student.id}));
    }                                     

  return (
    <>

        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">Edit Student</h2>
            </div>
            <form onSubmit={submitEdictedData}>
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
                    />
                    <InputError message={errors.course}/>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="submit"
                    >
                        Update Student
                    </button>
                </div>
            </form>
        </div>

    </>
  )
}

Edit.layout = function (page) {
   return <AppLayout>{page}</AppLayout>
}

export default Edit

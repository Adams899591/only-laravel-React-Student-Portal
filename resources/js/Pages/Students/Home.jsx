import AppLayout from '@/Layouts/AppLayout';
import { Link, usePage } from '@inertiajs/react';
import React from 'react'

const Home = () => {
      const {students, flash, auth} = usePage().props;
  
      
    //  {JSON.stringify(students)} 
  


  return (
      <>
      
          <div className="flex flex-col mb-4 gap-4">
            <h1>{auth.user.type}</h1>
              <div>
                {auth.user.type == "Teacher" &&
                <Link href={route("page.add")} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200">
                    Add Student
                </Link>}
              </div>
              <div>
                <input type="text" placeholder="Search students..." className="w-full sm:w-1/3 px-4 py-2 rounded shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
          </div>

            {/* show success message after add or update or delete student */}
            {flash.success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {flash.success}
              </div>
            )}          

          <div className="bg-white shadow-md rounded-lg">
            <table className="min-w-full leading-normal">

              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Static Row 1 */}

                {students.data.map((student) => (
                  <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-5 py-5 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{student.id}</p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{student.name}</p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{student.email}</p>
                      </td>
                      <td className="px-5 py-5 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{student.course}</p>
                      </td>
                      <td className="px-5 py-5 text-sm flex gap-2">

                        {/* only show view button for teachers and the authenticated student */}
                        {( auth.user.type === "Teacher" || auth.user.id == student.id ) &&
                        <Link href={route("page.view",{id: student.id})} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-xs">View</Link>
                        }

                        {/* only show edit button for the authenticated user which must still be a student */}
                        { student.id == auth.user.id  &&
                        <Link href={route("page.edit",{id: student.id})} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded text-xs">Edit</Link>
                        }

                        {/* only show delete button if the authenticated user is not student */}
                        {auth.user.type == "Teacher" && 
                        <Link href={route("student.delete",{id: student.id})} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-xs">Delete</Link>
                         }

                      </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
     


            {/* Pagination Links - Moved outside table */}
          <div className="mt-4 flex justify-center gap-2">
              {students.links.map((link, index) => (
                  link.url ? (
                      <Link key={index} href={link.url} className={`px-3 py-1 border rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`} dangerouslySetInnerHTML={{__html: link.label}} />
                  ) : (
                      <span key={index} className="px-3 py-1 border rounded text-gray-400" dangerouslySetInnerHTML={{__html: link.label}}></span>
                  )
              ))}
          </div>



    </>
  );
}

Home.layout = function (page) {
   return <AppLayout>{page}</AppLayout>
}


export default Home






























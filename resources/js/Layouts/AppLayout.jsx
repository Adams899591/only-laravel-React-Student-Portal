

const AppLayout = ({children}) => {
  return (
     <>
     
        <div className="flex h-screen bg-gray-100 font-sans">
                {/* Sidebar Menu */}
                <aside className="w-64 bg-gray-800 text-white flex flex-col">
                  <div className="p-4 text-2xl font-bold border-b border-gray-700">
                    Dashboard
                  </div>
                  <nav className="flex-1 px-2 py-4">
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Teacher</a>
                    <a href="#" className="block px-4 py-2 mt-2 rounded hover:bg-gray-700">Student</a>
                  </nav>
                </aside>



                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Content Area */}
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">

                       {children}

                  </main>
                </div>


          </div>
     </>
  )
}

export default AppLayout
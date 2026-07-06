function Sidebar({ role }) {

    return (
  
      <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">
  
        <h1 className="text-3xl font-bold mb-10">
  
          QuickCourt
  
        </h1>
  
        <p className="text-sm text-gray-400 mb-8">
  
          {role === "admin" ? "Administrator" : "Facility Owner"}
  
        </p>
  
        <nav className="space-y-4">
  
          <button className="block w-full text-left hover:text-blue-400">
  
            Dashboard
  
          </button>
  
          <button className="block w-full text-left hover:text-blue-400">
  
            Facilities
  
          </button>
  
          <button className="block w-full text-left hover:text-blue-400">
  
            Bookings
  
          </button>
  
          <button className="block w-full text-left hover:text-blue-400">
  
            Profile
  
          </button>
  
        </nav>
  
      </aside>
  
    );
  
  }
  
  export default Sidebar;
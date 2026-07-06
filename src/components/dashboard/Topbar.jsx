function Topbar({ title }) {

    return (
  
      <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
  
        <h1 className="text-2xl font-bold">
  
          {title}
  
        </h1>
  
        <div className="flex items-center gap-4">
  
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
  
            P
  
          </div>
  
        </div>
  
      </header>
  
    );
  
  }
  
  export default Topbar;
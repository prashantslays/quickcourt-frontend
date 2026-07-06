function SportCard({ sport }) {
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-center cursor-pointer">
  
        <div className="text-6xl mb-4">
          {sport.icon}
        </div>
  
        <h3 className="text-2xl font-bold text-gray-800">
          {sport.name}
        </h3>
  
        <p className="text-gray-500 mt-2">
          {sport.venues} Venues Available
        </p>
  
      </div>
    );
  }
  
  export default SportCard;
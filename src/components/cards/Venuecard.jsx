import { Star, MapPin } from "lucide-react";

function VenueCard({ venue }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">

      <img
        src={venue.image}
        alt={venue.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            {venue.name}
          </h3>

          <span className="flex items-center gap-1 text-yellow-500">

            <Star size={18} fill="currentColor" />

            {venue.rating}

          </span>

        </div>

        <p className="flex items-center gap-2 text-gray-500 mt-3">

          <MapPin size={18} />

          {venue.city}

        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-blue-600 font-bold text-xl">

            ₹{venue.price}/hr

          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">

            Book Now

          </button>

        </div>

      </div>

    </div>
  );
}

export default VenueCard;
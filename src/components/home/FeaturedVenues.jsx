import VenueCard from "../cards/VenueCard";
import { venues } from "../../data/venues";

function FeaturedVenues() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Featured Venues
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Discover the most popular sports venues near you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {venues.map((venue) => (
            <VenueCard
              key={venue.id}
              venue={venue}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedVenues;
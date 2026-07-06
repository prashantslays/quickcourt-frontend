import SportCard from "../cards/SportCard";
import { sports } from "../../data/sports";

function SportsGrid() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Popular Sports
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Choose your favorite sport and find nearby venues.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {sports.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default SportsGrid;
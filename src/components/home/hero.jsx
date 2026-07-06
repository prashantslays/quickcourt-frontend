import hero from "../../assets/images/hero.jpg";
import { Search } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

        <p className="uppercase tracking-widest text-blue-300 mb-4">
          Odoo Hackathon 2025
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold max-w-5xl leading-tight">
          Book Sports Venues
          <br />
          Anytime, Anywhere
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Discover football turfs, cricket grounds, badminton courts,
          tennis arenas and much more near you.
        </p>

        {/* Search Box */}
        <div className="mt-10 bg-white rounded-2xl flex items-center overflow-hidden shadow-2xl w-full max-w-3xl">

          <input
            type="text"
            placeholder="Search city, venue or sport..."
            className="flex-1 px-6 py-5 text-black outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-5 flex items-center gap-2">

            <Search size={20} />

            Search

          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
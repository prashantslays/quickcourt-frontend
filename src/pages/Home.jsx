import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import SportsGrid from "../components/home/SportsGrid";
import FeaturedVenues from "../components/home/FeaturedVenues";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <SportsGrid />
      <FeaturedVenues />
    </MainLayout>
  );
}

export default Home;
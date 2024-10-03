import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";
import InfoSys from "./components/InfoSys";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="border-3 border-red-700">
      {/* HEADER */}
      <Header />

      {/* HERO   */}
      <Hero />

      {/* CATEGORY */}
      <Category />

      {/* MOST SEARCHED CAR  */}
      <MostSearchedCar />

      {/* Information */}
      <InfoSys />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

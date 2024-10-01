import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";
import InfoSys from "./components/InfoSys";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
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

import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";

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
    </div>
  );
};

export default Home;

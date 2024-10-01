import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* HERO   */}
      <Hero />

      {/* CATEGORY */}
      <Category />
    </div>
  );
};

export default Home;

import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <Button>Login</Button>
      </SignInButton>
    </div>
  );
};

export default Home;

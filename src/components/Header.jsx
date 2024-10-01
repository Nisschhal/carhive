import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  // use the clerk to get user and if signed in or not
  const { user, isSignedIn } = useUser();

  return (
    // Header Container
    <div className="mx-auto flex items-center  shadow-sm p-6">
      {/* logo */}
      <img src="/logo.svg" alt="" width={36} height={36} />

      {/* Nav  */}
      <nav className="flex justify-center mx-auto">
        <ul className="hidden md:flex  gap-16  ">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            New
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Preowned
          </li>
        </ul>
      </nav>

      {/* if signedIn: userlogo and button, else: just button */}
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <SignInButton mode="modal" forceRedirectUrl="/">
            <Button variant="outline">Sign in</Button>
          </SignInButton>
          <Button>Submit Listing</Button>
        </div>
      )}
    </div>
  );
};

export default Header;

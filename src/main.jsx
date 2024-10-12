import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact.jsx";
import NotFound from "./NotFound.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Profile from "./profile/index.jsx";
import AddList from "./addList/index.jsx";
import { Toaster } from "@/components/ui/sonner";
import SearchByCategory from "./search/[category]/index.jsx";
import SearchCar from "./search/index.jsx";
import ListingDetails from "./listing-details/[id]/index.jsx";

// ROUTE PATH AND THEIR ELEMENTS
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/add-list", element: <AddList /> },
  { path: "/search", element: <SearchCar /> },
  { path: "/search/:category", element: <SearchByCategory /> },
  { path: "/listing-details/:id", element: <ListingDetails /> },
  { path: "*", element: <NotFound /> },
]);

// CLERK AUTHENTICATION
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// MAIN LAYOUT AND SETUPs: route, clerk
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);

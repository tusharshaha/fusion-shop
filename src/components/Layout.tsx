import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const Layout: React.FC = () => {
  const location = useLocation();

  // Define an array of route paths where we want to hide the header and footer
  const routesToHideHeader = [""];
  const routesToHideFooter = [""];

  const locationArray = location.pathname.split("/").filter(Boolean);

  // Check if the current route is in the array of routes to hide header and footer
  const shouldHideHeader = routesToHideHeader.some((route) =>
    locationArray.includes(route),
  );
  const shouldHideFooter = routesToHideFooter.some((route) =>
    locationArray.includes(route),
  );

  return (
    <>
      {!shouldHideHeader && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default Layout;

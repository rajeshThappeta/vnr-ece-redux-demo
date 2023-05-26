import React from "react";
import { Outlet,Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Link to="increment" className="me-5">Increment</Link>
      <Link to="decrement">Decrement</Link>
      <Outlet />
    </div>
  );
}

export default RootLayout;

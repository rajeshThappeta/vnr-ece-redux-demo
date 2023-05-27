import React from "react";
import { Outlet,Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Link to="increment" className="me-5">Increment</Link>
      <Link to="decrement" className="me-5">Decrement</Link>
      <Link to="users">Users</Link>
      <Outlet />
    </div>
  );
}

export default RootLayout;

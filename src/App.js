import React from "react";
import { RoutesComponent } from "./routes";
import { Link } from "./components/atoms";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      {/* <Link to="/">Home</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link> */}
      <RoutesComponent />
    </div>
  );
};

export default App;


import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { About } from "./Routers/About";
import { Contact } from "./Routers/Contact";
import { Beta } from "./Routers/Beta";
import { Features } from "./Routers/Features";
import { Instagram } from "./Routers/Instagram";
import { Login } from "./Routers/Login";
import { Pricing } from "./Routers/Pricing";
import { Tour } from "./Routers/Tour";


function App() {
  const routesData = [{
    path: "/",
    element: <h3>Welcome To Homepage</h3>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/beta/:city?/:name?",
    element: <Beta />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/features",
    element: <Features />
  },
  {
    path: "/instagram",
    element: <Instagram />
  },
  {
    path: "/tour",
    element: <Tour />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "*",
    element: <h3>Page not Found</h3>
  }
  ]
  return (
    <>
      <Header />
      <Routes>
        {routesData.map((ele) => <Route path="ele.path" element="ele.element" key={ele.path} />)}
      </Routes>
    </>
  );
}

export default App;

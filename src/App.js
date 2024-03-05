import { Route,Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { About } from "./Routers/About";
import { Contact } from "./Routers/Contact";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<h3>Wel Come to Homepage</h3>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
      </Routes>
    </>
  );
}

export default App;

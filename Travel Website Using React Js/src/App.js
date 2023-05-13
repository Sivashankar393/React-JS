import "./Styles.css";
import Navbar from "./components/Navbar";
import {Switch,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Switch>
     <Navbar/>
     <Home/>
      </div>

  );
}
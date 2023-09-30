import { BrowserRouter , Routes, Route } from "react-router-dom";

// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from "./components/Home";
import Pricing from './components/Pricing'
import Development from "./components/Development";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
<Route path="/development" element= {<Development/>}/>
     </Routes>
     <Footer />

     </BrowserRouter>
    </div>
  );
}

export default App;

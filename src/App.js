import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Description from "./pages/Description";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/description" element={<Description/>}/>
          </Routes>
    </BrowserRouter>
  );
};
export default App;

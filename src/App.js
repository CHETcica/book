import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Description from "./pages/Description";

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/description" element={<Description/>}/>
          </Routes>
    </BrowserRouter>
  );
};
export default App;

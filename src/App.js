import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom"
import EditPerson from "../src/pages/EditPerson"
import Home from "../src/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/edit/:id" element={<EditPerson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
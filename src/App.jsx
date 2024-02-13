import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Users, NotFound , UserDetails } from "./pages";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/Users/:userName" element={<UserDetails/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

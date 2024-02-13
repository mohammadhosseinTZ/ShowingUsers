import React from "react";
import MainNavbar from "../../layout/MainNavbar";
import about_style from "./about.style..module.css"
export default function About() {
  return (
    <div className={about_style.container}>
      <MainNavbar />
      <div>
        <h1>About</h1>
        <span>This Is My About Page</span>
      </div>
    </div>
  );
}

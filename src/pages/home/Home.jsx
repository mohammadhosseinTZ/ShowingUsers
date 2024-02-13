import React from "react";
import MainNavbar from "../../layout/MainNavbar";
import home_style from "./home.style.module.css";
export default function Home() {
  return (
    <div className={home_style.container}>
      <MainNavbar />
      <div>
        <h1>Home</h1>
        <span>This Is My Home Page</span>
      </div>
    </div>
  );
}

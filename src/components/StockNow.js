import React from "react";
import ProjectPage from "./ProjectPage";
import img1 from "../images/StockNow/Thumbnail.png"
import img2 from "../images/StockNow/Login.png"
import img3 from "../images/StockNow/Registration.png"
import vid1 from "../images/StockNow/main.mov"
import vid2 from "../images/StockNow/login.mov"
import vid3 from "../images/StockNow/list.mov"
import vid4 from "../images/StockNow/add.mov"
import vid5 from "../images/StockNow/register.mov"


export default function NewTab() {

  const images = [
    {
      src: img1,
      type: 'img'
    },
    {
      src: img2,
      type: 'img'
    },
    {
      src: img3,
      type: 'img'
    },
    {
      src: vid1,
      type: 'video'
    },
    {
      src: vid2,
      type: 'video'
    },
    {
      src: vid3,
      type: 'video'
    },
    {
      src: vid4,
      type: 'video'
    },
    {
      src: vid5,
      type: 'video'
    },
  ]; 
  const about = 
    <div>
    <h3>About</h3>
    <h5>Tech Stack: Django | HTML | CSS | Bootstrap</h5>
    <p>The motivation behind StockNow was to create a fullstack website that provided users with live stock prices and statistics. 
      StockNow features live statistics for 500+ stocks from the New York Stock Exchange and allows users to search for and favourite their favourite stocks.
      Using django authentication I implemented authentication and validation enabling users to register, log in, log out etc. improving the user experience, when logged in 
      StockNow personalizes the expierience to the user, displaying all favourited stocks on the homepage. Stock data is pulled from a RapidApi endpoint, stored in the backend and 
      updated every 5 minutes providing users with current data, the use of backend storage eliminates the need for repeated calls to the slow api endpoint and greatly speeds up the 
      experience for the user.</p>
    </div>
  return <ProjectPage Title="StockNow" 
  images = {images} 
  description = "Fullstack Website that provides real-time statistics for 500+ stocks from the NYSE"
  about = {about} 
  color = "#7fffa6"
  link = "https://github.com/Krishan-Patel/StockNow">
  </ProjectPage>;
} 

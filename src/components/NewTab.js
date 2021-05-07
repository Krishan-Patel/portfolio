import React from "react";
import ProjectPage from "./ProjectPage";
import img1 from '../images/new_tab/Thumbnail_main.png';
import vid1 from "../images/new_tab/vid1.mov"
import vid2 from "../images/new_tab/vid2.mov"
import img2 from "../images/new_tab/Thumbnail_small.png"
import vid3 from "../images/new_tab/Custom Settings.mov"
import vid4 from "../images/new_tab/ESPN GameCast.mov"
import vid5 from "../images/new_tab/Resize.mov"
export default function NewTab() {

  const images = [
    {
      src: img1,
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
      src: img2,
      type: 'img'
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
    <h5>Tech Stack: Javascript | HTML | CSS | Chrome Extensions API</h5>
    <p>The motivation behind GameCenter was to create a new tab override page to display live scores to various sporting events allowing users to quickly access the latests
      scores for their favourite teams. GameCenter has allowed me to stay updated on scores from my favourite leagues without having to indiviudaly search for scores and standings.
      Gamecenter allows users to be one click away from basic betting odds and statistics for all sporting events, and ESPN gamecast for advanced statistics. Users can customize which 
      leagues they wish to follow, their page background and bookmarks to tailor their experience to their liking with a simple options page. 
      The custom new tab page responsively resizes the UI allowing for an enjoyable user experience. GameCenter currently supports 7 leagues and the project 
      was developed with modular design allowing new sports leagues to be easily integrated in the future without making any large changes. 
    </p>
    </div>
  return <ProjectPage Title="GameCenter" 
  images = {images} 
  description = "Custom New Tab Override Page That Displays Live Scores, Odds And Statistics From Various Sports Leagues"
  about = {about} 
  color = "#7fd6ff"
  link = "https://github.com/Krishan-Patel/GameCenter-ChromeExtension">
  </ProjectPage>;
}

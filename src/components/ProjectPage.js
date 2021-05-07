import React from "react";
import "../styles/ProjectPage.css";
import github_logo from "../images/github2.png";
import {
  Carousel,
  onChange,
  onClickItem,
  onClickThumb,
} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectPage(props) {
  console.log(props);
  const gallery = [];
  props.images.forEach((image) => {
    let style = {
      maxHeight: "500px",
    };
    gallery.push(
      image.type === "img" ? (
        <img src={image.src} alt="" height="100%" width="auto" style={style} />
      ) : (
        <video
          src={image.src}
          width="100%"
          height="100%"
          style={style}
          controls
          loop
        ></video>
      )
    );
  });

  const customRenderThumb = (children) =>
    children.map((item) => {
      if (item.type === "img") {
        return <img src={item.props.src} alt=""></img>;
      } else {
        return <video src={item.props.src} width="100%"></video>;
      }
    });

  const styles = {
    backgroundColor: props.color
  }
  return (
    <div className="Page-wrapper">
      <div className="Project-body">
        <div className="container" style = {styles}>
          <div className="header" >
            <h1>{props.Title}</h1>
            <div className="icon-container">
             <a href={props.link}><img src={github_logo} className="icon" alt=""></img></a> 
            </div>
          </div>
          <div>
            <hr></hr>
            <h3>{props.description}</h3>
          </div>
        </div>
        <div className="main-features">
          <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            renderThumbs={customRenderThumb}
          >
            {gallery}
          </Carousel>
          <div className="container" style = {styles}> 
          {props.about}
          </div>
        </div>
      </div>
    </div>
  );
}

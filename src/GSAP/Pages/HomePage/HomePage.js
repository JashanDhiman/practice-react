import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomePage.css";
import img2 from "../../images/work-theater-img1.png";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".container2",
        start: "top top",
        endTrigger: ".container3",
        end: "bottom bottom",
        markers: true,
        pin: true,
        scrub: true,
        toggleActions: "play pause reverse pause",
      },
      y: () => {
        var imgHeight = document.getElementById("img").offsetHeight;
        var totalImages = document.getElementsByClassName("box").length;
        return -(imgHeight * totalImages - imgHeight);
      },
      //gsap.utils.toArray(".box").forEach((panel, i) => {
      //  ScrollTrigger.create({
      //    trigger: panel,
      //    start: "top top",
      //    pin: true,
      //    pinSpacing: false,
      //  });
      //});
    });
  });
  return (
    <div className="home-container">
      <div className="container container1"></div>
      <div className="container container2">
        <div className="box-wrapper">
          {/*<div className="box a">*/}
          <img id="img" className="box a" src={img2} alt="1" />
          {/*</div>*/}
          {/*<div className="box b">*/}
          <img className="box b" src={img2} alt="2" />
          {/*</div>*/}
          {/*<div className="box c">*/}
          <img className="box c" src={img2} alt="3" />
          {/*</div>*/}
        </div>
      </div>
      <div className="container container3"></div>
    </div>
  );
};

export default HomePage;

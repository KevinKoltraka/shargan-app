import React, { useRef } from "react";
import "./partner.css";
import Dots1 from "./BrandImages/9Dots.jpg";
import Dots2 from "./BrandImages/9Dots.jpg";
import Dots3 from "./BrandImages/9Dots.jpg";
import Dots4 from "./BrandImages/9Dots.jpg";
import Dots5 from "./BrandImages/9Dots.jpg";
import Dots6 from "./BrandImages/9Dots.jpg";
import Dots7 from "./BrandImages/9Dots.jpg";

const Partner = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="brand-partners-container">
      <button className="arrow left-arrow" onClick={scrollLeft}>&lt;</button>
      <div className="brand-partners" ref={scrollRef}>
        <img src={Dots1} alt="brand-partners" />
        <img src={Dots2} alt="brand-partners" />
        <img src={Dots3} alt="brand-partners" />
        <img src={Dots4} alt="brand-partners" />
        <img src={Dots5} alt="brand-partners" />
        <img src={Dots6} alt="brand-partners" />
        <img src={Dots7} alt="brand-partners" />
      </div>
      <button className="arrow right-arrow" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default Partner;

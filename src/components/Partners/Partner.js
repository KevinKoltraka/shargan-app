import React from "react";
import "./partner.css";
import Dots1 from "./BrandImages/9Dots.jpg";
import Dots2 from "./BrandImages/9Dots.jpg";
import Dots3 from "./BrandImages/9Dots.jpg";
import Dots4 from "./BrandImages/9Dots.jpg";
import Dots5 from "./BrandImages/9Dots.jpg";
import Dots6 from "./BrandImages/9Dots.jpg";
import Dots7 from "./BrandImages/9Dots.jpg";


const Partner = () => {
  return (
    <div className="brand-partners">
      {/* First set of images */}
      <img src={Dots1} alt="brand-partners" />
      <img src={Dots2} alt="brand-partners" />
      <img src={Dots3} alt="brand-partners" />
      <img src={Dots4} alt="brand-partners" />
      <img src={Dots5} alt="brand-partners" />
      <img src={Dots6} alt="brand-partners" />
      <img src={Dots7} alt="brand-partners" />
    </div>
  );
};

export default Partner;

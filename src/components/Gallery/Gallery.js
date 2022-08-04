import React from "react";
import "./Gallery.css";
import img1 from "../Images/Gallery/20220508_110754.jpg";
import img2 from "../Images/Gallery/20220508_154751.jpg";
import img3 from "../Images/Gallery/DSCN1813.JPG";
import img4 from "../Images/Gallery/DSCN1856.JPG";
import img5 from "../Images/Gallery/DSCN1863.JPG";
import img6 from "../Images/Gallery/DSCN1879_1.JPG";
import img7 from "../Images/Gallery/DSCN1903.JPG";
import img8 from "../Images/Gallery/DSCN1939_1.JPG";
import img9 from "../Images/Gallery/DSCN1940_2.JPG";
import img10 from "../Images/Gallery/DSCN1943_1.JPG";
import img11 from "../Images/Gallery/IMG_0252.jpg";
import img12 from "../Images/Gallery/DSCN1949_2.JPG";
import img13 from "../Images/Gallery/DSCN1953_2.JPG";
import img14 from "../Images/Gallery/DSCN1905.JPG";
import img15 from "../Images/Gallery/DSCN1955_2.JPG";
import img16 from "../Images/Gallery/IMG_0276.jpg";
import img17 from "../Images/Gallery/DSCN1963_1.JPG";
import img18 from "../Images/Gallery/IMG_0203.jpg";
import img19 from "../Images/Gallery/IMG_0204.jpg";
import img20 from "../Images/Gallery/IMG_0278.png";
import img21 from "../Images/Gallery/IMG_0206.jpg";
import img22 from "../Images/Gallery/IMG_0216.jpg";
import img23 from "../Images/Gallery/IMG_0222_1.jpg";
import img24 from "../Images/Gallery/IMG_0226_1.jpg";
import img25 from "../Images/Gallery/DSCN1918.JPG";
import img26 from "../Images/Gallery/IMG_0227_1.jpg";
import img27 from "../Images/Gallery/IMG_0231.jpg";
import img28 from "../Images/Gallery/IMG_0232.jpg";
import img29 from "../Images/Gallery/IMG_0235.jpg";
import img30 from "../Images/Gallery/IMG_0275.jpg";
import img31 from "../Images/Gallery/IMG_0277.jpg";
import Navbar from "./../navbar/Navbar";
import Footer from "../Footer/Footer";
const Gallery = () => {
  return (
    <>
    <div class="con">
      <Navbar />
      <div class="gallery">
        <div>
          <img src={img1} alt="" />
        </div>
        <div class="h-stretch">
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div class="b-stretch">
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div class="h-stretch">
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
        <div>
          <img src={img9} alt="" />
        </div>
        <div>
          <img src={img10} alt="" />
        </div>
        <div class="v-stretch">
          <img src={img11} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
        <div>
          <img src={img13} alt="" />
        </div>
        <div class="b-stretch">
          <img src={img14} alt="" />
        </div>
        <div>
          <img src={img15} alt="" />
        </div>
        <div class="h-stretch">
          <img src={img16} alt="" />
        </div>
        <div>
          <img src={img17} alt="" />
        </div>
        <div>
          <img src={img18} alt="" />
        </div>
        <div>
          <img src={img19} alt="" />
        </div>
        <div class="v-stretch">
          <img src={img20} alt="" />
        </div>
        <div>
          <img src={img21} alt="" />
        </div>
        <div>
          <img src={img22} alt="" />
        </div>
        <div>
          <img src={img23} alt="" />
        </div>
        <div class="v-stretch">
          <img src={img24} alt="" />
        </div>
        <div class="v-stretch">
          <img src={img25} alt="" />
        </div>
        <div>
          <img src={img26} alt="" />
        </div>
        <div>
          <img src={img27} alt="" />
        </div>
        <div>
          <img src={img28} alt="" />
        </div>
        <div>
          <img src={img29} alt="" />
        </div>
        <div class="h-stretch">
          <img src={img30} alt="" />
        </div>
        <div>
          <img src={img31} alt="" />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Gallery;

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Animation from "./Animation";

const MainImage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: true,
    appendDots: (dots: any) => (
      <div style={{ transform: "translateY(-150%)" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  const settings2 = {
    dots: true,
    appendDots: (dots: any) => (
      <div style={{ transform: "translateY(-150%)" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 3000,
  };

  // const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="mainSection">
      <div className="mainPage">
        <div className="allPageBox">
          <Slider {...settings}>
            <div>
              <div className="testImg1"></div>
            </div>
            <div>
              <div className="testImg2"></div>
            </div>
            <div>
              <div className="testImg3"></div>
            </div>
          </Slider>
        </div>
        <div className="shoppingPageBox"></div>
        <div className="communityPageBox">
          <Slider {...settings2}>
            <div>
              <div className="testImg1"></div>
            </div>
            <div>
              <div className="testImg2"></div>
            </div>
            <div>
              <div className="testImg3">
                <Animation></Animation>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .mainSection {
          display: flex;
          justify-content: center;
        }
        .testImg1 {
          background-color: yellow;
          width: 100%;
          height: 600px;
        }
        .testImg2 {
          background-color: red;
          width: 100%;
          height: 600px;
        }
        .testImg3 {
          background-color: green;
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mainPage {
          width: 95vw;
          height: 2000px;
          background-color: white;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .allPageBox {
          margin-top: 55px;
          width: 80vw;
          height: 600px;
          border: 3px solid black !important;
          overflow: hidden;
          border-radius: 10px;
        }
        .communityPageBox {
          margin-top: 55px;
          width: 80vw;
          height: 600px;
          border: 3px solid black !important;
          overflow: hidden;
          border-radius: 10px;
        }
        .shoppingPageBox {
          margin-top: 55px;
          width: 80vw;
          height: 600px;
          border: 3px solid black !important;
          overflow: hidden;
          border-radius: 10px;
        }
         {
          /* .image-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          transition: transform 100s ease-out;
          transform: translateX(-{imageIndex * 50}%);
        }
        .image-wrapper span {
          width: 33.33%;
          background-size: cover;
          animation: slide 100s linear infinite;
        }  */
        }
      `}</style>
    </div>
  );
};

export default MainImage;

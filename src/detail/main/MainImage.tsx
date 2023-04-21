import { useState, useEffect } from "react";

const MainImage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flexflex">
      <div>
        <div className="test">
          무한 슬라이드 - 각 페이지에 대한 간략한 이미지
        </div>
        <div className="test">gif로 쇼핑 부분 간략하게 소개</div>
        <div className="doration">
          <div className="image-wrapper">
            <div className="spanColor1" />
            <div className="spanColor2" />
            <div className="spanColor3" />
          </div>
        </div>
        <div className="test">깃이나 각자가 맡은 역할 넣을 부분</div>
      </div>
      <style jsx>{`
        .flexflex {
          display: flex;
          justify-content: center;
        }
        .flexflex div {
          width: 95vw;
          height: 2000px;
          background-color: white;
          display: flex;+
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .test {
          margin-top: 55px;
          width: 80% !important;
          height: 600px !important;
          background-color: #f9ebd777 !important;
          border: 3px solid black !important;
          font-size: 30px;
        }
        .doration{
          width: 80% !important;
          height: 600px !important;
        }
        .image-container {
          position: relative;
          overflow: hidden;
          width: 95%;
        }
        .image-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          transition: transform 100s ease-out;
          transform: translateX(-${imageIndex * 100}%);
        }
        .image-wrapper span {
          width: 33.33%;
          background-size: cover;
          animation: slide 100s linear infinite;
        }
        .spanColor1 {
          z-index: 20;
          background-color: aqua !important;
        }
        .spanColor2 {
          z-index: 20;
          background-color: wheat !important;
        }
        
        .spanColor3 {
          z-index: 20;
          background-color: coral !important;
        }
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default MainImage;

import Image from "next/image";
import AnimationBanner from "./AnimationBanner";

const MainImage = () => {
  return (
    <div className="flexflex">
      <div>
        <div className="test"></div>
        <AnimationBanner />
        <div className="test"></div>
      </div>

      {/* <img
        src="http://www.astronomer.rocks/news/photo/202001/88605_19427_4510.jpg"
        alt="강아지와고양이"
        className="temp-image"
      /> */}
      <style jsx>{`
        .flexflex {
          display: flex;
          justify-content: center;
        }
        .flexflex div {
          width: 95vw;
          height: 2000px;
          background-color: white;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .test {
          margin-top: 55px;
          width: 88% !important;
          height: 600px !important;
          background-color: black !important;
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
};

export default MainImage;

import React from "react";

const Animation = () => {
  return (
    <div className="flexall">
      <div className="lastBox">
        <div className="boxMain">
          <div className="animationBox"></div>
          <div className="animationBox2"></div>
          <div className="animationBox3"></div>
        </div>
      </div>
      <style jsx>{`
        .flexall {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .lastBox {
          width: 1300px;
          height: 500px;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .boxMain {
          position: relative;
          animation: slide 15s ease-in-out infinite;
          overflow-x: hidden;
        }

        @keyframes slide {
          0% {
            left: 0;
          }
          100% {
            left: 1000px;
          }
        }

        .boxMain {
          display: flex;
          flex-direction: row;
        }

        .animationBox {
          width: 800px;
          height: 300px;
          background-color: antiquewhite;
        }
        .animationBox2 {
          width: 800px;
          height: 300px;
          background-color: aqua;
        }
        .animationBox3 {
          width: 800px;
          height: 300px;
          background-color: blue;
        }
      `}</style>
    </div>
  );
};

export default Animation;

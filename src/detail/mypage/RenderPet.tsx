const RenderPet = () => {
  return (
    <>
      <div className="wrapper">
        <div className="petBox">
          <div>
            <div className="row">
              <div className="image">img</div>
              <div className="col sideInterval">
                <div>이름</div>
                <div>OOO</div>
                <div className="lineIterval">생일</div>
                <div>2023.04.27</div>
              </div>
            </div>
            <div className="col">
              <div>종</div>
              <div>OOOOO</div>
              <div className="lineIterval">간단한 소개</div>
              <div>안녕하세요 저희 OOO는 OOO</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 0 2vw 0 2vw;
          height: 55%;
          display: flex;
          justify-content: center;
        }
        .petBox {
          margin-top: 3vh;
          width: 25vw;
          height: 90%;
          background-color: #ffedcf;
          border: 1.5px solid#ffb951;
          border-radius: 15px;
          padding: 20px;
        }
        .image {
          width: 12vw;
          height: 12vw;
          border: 2px solid black;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .col {
          margin-top: 15px;
        }
        .sideInterval {
          margin-left: 20px;
        }
        .lineIterval {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default RenderPet;

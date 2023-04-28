const RenderPersonal = () => {
  return (
    <>
      <div className="wrapper">
        <div className="informBox">
          <div className="row">
            <div className="image">img</div>
            <div className="col">
              <div className="smallInterval">이름</div>
              <div>OOO</div>
              <div className="interval">생년월일</div>
              <div>2023.04.27</div>
            </div>
          </div>
          <div className="row bottomWrapper">
            <div>좋아요 수</div>
            <div>게시글 수</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 40%;
          padding: 0 2vw 0 2vw;
          display: flex;
          justify-content: center;
        }
        .informBox {
          width: 20vw;
          height: 88%;
          background-color: #ffedcf;
          border: 1.5px solid#ffb951;
          border-radius: 15px;
          padding: 20px;
        }
        .image {
          width: 8vw;
          height: 8vw;
          border: 2px solid black;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .col {
          margin-left: 20px;
        }
        .smallInterval {
          margin-top: 10px;
        }
        .interval {
          margin-top: 20px;
        }
        .bottomWrapper {
          margin-top: 30px;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
};

export default RenderPersonal;

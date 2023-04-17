const ContentDetail = () => {
  return (
    <>
      <div className="contentWrapper">
        <div className="header">
          <div className="searchBox">
            <div></div>
            <button className="searchButton"></button>
          </div>
          <button className="writeButton"></button>
        </div>
        <div>내용 부분</div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          width: 35vw;
          justify-content: space-between;
          {/* margin-right: -30px; */}
        }
        .searchBox {
          border: 1px solid black;
          width: 360px;
          height: 30px;
        }
        .writeButton {
          width: 100px;
          height: 30px;
        }
        `}</style>
    </>
  );
};

export default ContentDetail;

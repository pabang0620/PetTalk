import React from "react";

const ShoppingFilter = () => {
  return (
    <div className="shoppingFilter">
      <div className="typeBox">
        <div className="filterType">반려동물</div>
        <div className="typeValue">
          <div></div>
          <button>강아지</button>
          <button>고양이</button>
          <button>새</button>
          <button>물고기</button>
        </div>
      </div>
      {/* map 이나 컴포넌트로 코드 줄이기 */}
      <div className="typeBox">
        <div className="filterType">물품 종류</div>
        <div className="typeValue">
          <div></div>
          <button>간식</button>

          <button>음수대</button>
          <button>방석/집</button>
          <button>장난감</button>
        </div>
      </div>
      <div className="typeBox">
        <div className="filterType">가격</div>
        <div className="typeValue">
          <div></div>
          <button>0 ~ 10000</button>
          <button>10000 ~ 30000</button>
          <button>30000 ~ 50000</button>
          <button>50000 ~ </button>
        </div>
      </div>

      <style jsx>{`
        .shoppingFilter {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          border: 1px solid #cfcece;
          width: 75vw;
        }
        .typeBox {
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #cfcece;
        }
        .typeValue {
          display: flex;
          flex-direction: row;
        }
        .typeValue button {
          border: none;
          padding: 5px 10px;
          margin: 0px 2px;
          cursor: pointer;
          background-color: #fff1dc;
        }
        .typeValue div {
          width: 20px;
        }
        .filterType {
          background-color: #ff9800;
          font-size: 17px;
          color: white;
          width: 150px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ShoppingFilter;

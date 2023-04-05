import React from "react";

export interface product {
  imgSrc: string;
  company: string;
  product: string;
  price: number;
}

const Product = ({ imgSrc, company, product, price }: product) => {
  return (
    <div className="productBox">
      <div className="bookMark">북</div>
      <div className="productImg">{imgSrc}</div>
      <div className="productCom">{company}</div>
      <div className="productDetail">{product}</div>
      <div className="productPrice">{price}</div>
      <style jsx>{`
        .bookMark {
          position: absolute;
          right: 3%;
          top: 2%;
        }
        .productBox {
          margin: 1.5%;
          width: 22%;
          position: relative;
        }
        .productImg {
          border: 1px solid black;
          height: 270px;
        }
        .productCom {
          font-size: 12px;
          color: gray;
        }
        .productDetail {
          font-size: 14px;
        }
        .productPrice {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Product;

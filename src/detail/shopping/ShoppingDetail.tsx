import React from "react";
import ShoppingFilter from "./ShoppingFilter";
import Product, { product } from "./Product";

const ShoppingDetail = () => {
  const productData: product[] = [
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
    },
  ];
  return (
    <div className="shoppingDetail">
      <ShoppingFilter></ShoppingFilter>
      <div className="productWrap">
        {productData.map((data: product) => (
          <Product
            key={1}
            imgSrc={data.imgSrc}
            company={data.company}
            product={data.product}
            price={data.price}
          />
        ))}
      </div>
      <style jsx>{`
        .shoppingDetail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .productWrap {
          display: flex;
          flex-direction: row;
          width: 80vw;
          flex-wrap: wrap;
          justify-content: baseline;
        }
      `}</style>
    </div>
  );
};

export default ShoppingDetail;

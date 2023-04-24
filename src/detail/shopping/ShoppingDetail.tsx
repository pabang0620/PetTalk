import React from "react";
import ShoppingFilter from "./ShoppingFilter";
import { product } from "@/context/atoms/atoms";
import Product from "./Product";

const ShoppingDetail = () => {
  const productData: product[] = [
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
      id: 0,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
      id: 1,
    },
    {
      imgSrc: "이미지",
      company: "trendy",
      product: "퀸 사이즈 침대 프레임",
      price: 144580,
      id: 2,
    },
    {
      imgSrc: "이미지",
      company: "더룸",
      product: "책상 + 3단 수납장",
      price: 80580,
      id: 3,
    },
    {
      imgSrc: "이미지",
      company: "이케아",
      product: "이케아 3단 수납장",
      price: 30580,
      id: 4,
    },
    {
      imgSrc: "이미지",
      company: "Bingo",
      product: "스누피 무드등",
      price: 15580,
      id: 5,
    },
  ];
  return (
    <div className="shoppingDetail">
      <ShoppingFilter></ShoppingFilter>
      <div className="productWrap">
        {productData.map((data: product, index) => (
          <Product
            key={index}
            id={data.id}
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
          width: 100vw;
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

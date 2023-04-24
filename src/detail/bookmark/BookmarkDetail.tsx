import { useRecoilValue } from "recoil";

import React from "react";
import { bookmarkListState, product } from "@/context/atoms/atoms";
import Product from "@/detail/shopping/Product";

const BookmarkDetail = () => {
  const bookmarkData: product[] = useRecoilValue(bookmarkListState);
  return (
    <div>
      {bookmarkData.map((data: product, index) => (
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
  );
};

export default BookmarkDetail;

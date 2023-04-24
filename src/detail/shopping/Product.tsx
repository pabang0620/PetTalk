import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import swal from "sweetalert";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkListState, product } from "@/context/atoms/atoms";

const Product = ({ imgSrc, company, product, price, id }: product) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const [bookMarkIcon, setBookMarkIcon] = useState(false);

  const mappingData = {
    imgSrc: imgSrc,
    company: company,
    product: product,
    price: price,
    id: id,
  };

  const addBookmark = () => {
    const isDuplicate = bookmarkList.some(
      (bookmark) => bookmark.id === mappingData.id
    );
    if (!isDuplicate) {
      setBookmarkList([...bookmarkList, mappingData]);
    }
  };
  const removeBookmark = (idToRemove: any) => {
    const updatedList = bookmarkList.filter(
      (bookmark) => bookmark.id !== idToRemove
    );
    setBookmarkList(updatedList);
  };

  const bookMarkClick = () => {
    setBookMarkIcon(true);

    if (bookMarkIcon === false) {
      swal({
        title: "북마크에 추가되었습니다.",
        buttons: {
          confirm: {
            text: "확인",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
        timer: 1500,
      });
      addBookmark();
    }
    if (bookMarkIcon) {
      setBookMarkIcon(false);
      removeBookmark(id);
    }
  };

  useEffect(() => {
    if (bookmarkList.map((bookmark) => bookmark.id).includes(id)) {
      setBookMarkIcon(true);
    }
  }, [bookmarkList]);
  return (
    <div className="productBox">
      <div
        className={bookMarkIcon === true ? "bookMarkAnimation" : "bookMark"}
        onClick={bookMarkClick}
      >
        {bookMarkIcon === true ? (
          <FaHeart size={22} style={{ color: "red" }} />
        ) : (
          <FaRegHeart size={22} style={{ color: "red" }} />
        )}
      </div>
      <div className="productImg">{imgSrc}</div>
      <div className="productCom">{company}</div>
      <div className="productDetail">{product}</div>
      <div className="productPrice">{price}원</div>
      <style jsx>{`
        .bookMark {
          position: absolute;
          right: 3%;
          top: 2%;
          cursor: pointer;
        }
        @-webkit-keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            -webkit-transform: translateY(0);
          }
          40% {
            -webkit-transform: translateY(-30px);
          }
          60% {
            -webkit-transform: translateY(-20px);
          }
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-20px);
          }
        }

        .bookMarkAnimation {
          position: absolute;
          right: 3%;
          top: 2%;
          cursor: pointer;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-name: bounce;
          animation-name: bounce;
        }

        .productBox {
          margin: 1.5% 1.8%;
          width: 17vw;
          position: relative;
        }
        .productImg {
          border: 1px solid black;
          height: 15vw;
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

import Link from "next/link";
import React from "react";

const NavModal = () => {
  return (
    <div className="navRelate">
      <div className="direction"></div>
      <ul className="navModal">
        <li>
          <Link href="mypage">마이페이지</Link>
        </li>
        <li>
          <Link href="bookMark">북마크</Link>
        </li>
        <li>
          <Link href="#">나의 게시글</Link>
        </li>
        <li className="logoutBorder">
          <Link href="#">로그아웃</Link>
        </li>
      </ul>
      <style jsx>{`
        .logoutBorder {
          margin-top: 7px;
          border-top: 1px solid #cdcdcd;
        }
        .navRelate {
          position: relative;
        }
        .direction {
          position: absolute;
          right: 115px;
          top: 10px;
          margin-top: 4px;
          border: 1px solid #cdcdcd;
          background-color: #fff;
          height: 14px;
          width: 14px;
          border-top-right-radius: 30%;
          -webkit-transform: rotate(-55deg) skewX(-20deg);
          transform: rotate(-55deg) skewX(-22deg);
        }
        .navModal {
          position: absolute;
          top: 20px;
          right: 70px;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          padding: 5px;
          margin: 0px;
          background-color: white;
          z-index: 30;
        }
        li {
          width: 7vw;
          font-size: 16px;
          list-style: none;
          padding: 10px 20px;
          border-radius: 5px;
          text-align: center;
        }
        li:hover {
          background-color: #f0ecec;
        }
        a {
          text-decoration: none;
          white-space: nowrap;
        }
        a:visited {
          color: black !important;
        }
      `}</style>
    </div>
  );
};

export default NavModal;

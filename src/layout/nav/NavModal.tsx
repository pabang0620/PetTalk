import Link from "next/link";
import React from "react";

const NavModal = () => {
  return (
    <div>
      <div className="direction"></div>
      <ul className="navModal">
        <li>
          <Link href="#">마이페이지</Link>
        </li>
        <li>
          <Link href="#">나의 쇼핑</Link>
        </li>
        <li>
          <Link href="#">나의 게시글</Link>
        </li>
        <li>
          <Link href="#">로그아웃</Link>
        </li>
      </ul>
      <style jsx>{`
        .direction {
          position: absolute;
          left: 78%;
          bottom: 91.7%;
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
          top: 70px;
          left: 75%;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          padding: 5px;
          margin: 0px;
          background-color: white;
        }
        a {
          font-size: 16px;
          list-style: none;
          padding: 10px 20px;
          border-radius: 5px;
          text-align: center;
          white-space: nowrap;
        }
        a:hover {
          background-color: #f0ecec;
        }
        a:visited {
          color: black;
        }
        li {
          width: 6vw;
          font-size: 16px;
          list-style: none;
          padding: 10px 20px;
          border-radius: 5px;
          text-align: center;
        }
        li:hover {
          background-color: #f0ecec;
        }
      `}</style>
    </div>
  );
};

export default NavModal;

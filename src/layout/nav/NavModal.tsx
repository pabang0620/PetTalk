import Link from "next/link";
import React from "react";

const NavModal = () => {
  return (
    <ul>
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

      <style jsx>{`
        ul {
          position: absolute;
          top: 70px;
          left: 73%;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          padding: 5px;
          margin: 0px;
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
    </ul>
  );
};

export default NavModal;

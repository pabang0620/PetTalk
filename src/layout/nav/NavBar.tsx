import React, { useState } from "react";
import Link from "next/link";
import NavModal from "./NavModal";
import Image from "next/image";

const NavBar = () => {
  const [navModal, setNavModal] = useState(false);

  const navModalOn = () => {
    setNavModal(true);
    if (navModal) {
      setNavModal(false);
    }
  };
  return (
    <>
      <nav>
        <div className="navLeft">
          <div className="logoStyle">
            <Link href="/">PetTalk</Link>
          </div>
        </div>
        <ul className="navLeft fixed">
          <li>
            <Link href="/community">커뮤니티</Link>
          </li>
          <li>
            <Link href="/shopping">쇼핑</Link>
          </li>
        </ul>
        <div className="profileImg" onClick={navModalOn}>
          <Image
            src="/images/petTalklogo.png"
            alt="logo"
            width={25}
            height={25}
          ></Image>
        </div>
      </nav>
      <table></table>
      {navModal === true && <NavModal />}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Noto+Sans+KR:wght@400;500&display=swap");
        li {
          width: 100px;
          margin: 0px;
          font-size: 18px;
          font-weight: 600;
          text-align: center;
        }
        .logoStyle {
          font-family: "Kalam", cursive;
          font-size: 35px;
          font-weight: 700;
          margin: 0px 0px 0px 120px;
        }
        .profileImg {
          margin: 0px 100px 0px 0px;
          width: 50px;
          height: 50px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .navLeft {
          display: flex;
          flex-direction: row;
          padding: 0px;
          margin: 0px;
          align-items: center;
        }
        .fixed {
          position: absolute;
          left: 45vw;
        }
        nav {
          position: fixed;
          width: 100vw;
          max-width: 100%;
          height: 70px;
          background-color: #ffb951;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          z-index: 200;
        }
        table {
          width: 100vw;
          max-width: 100%;
          height: 70px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default NavBar;

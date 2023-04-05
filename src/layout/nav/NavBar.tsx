import React, { useState } from "react";
import Link from "next/link";
import NavModal from "./NavModal";

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
        <ul className="navLeft">
          <li>
            <Link href="#">커뮤니티</Link>
          </li>
          <li>
            <Link href="shopping">쇼핑</Link>
          </li>
        </ul>
        <div className="profileImg" onClick={navModalOn}></div>
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
        }
        .navLeft {
          display: flex;
          flex-direction: row;
          padding: 0px;
          margin: 0px;
          align-items: center;
        }
        nav {
          position: fixed;
          width: 100vw;
          height: 70px;
          background-color: #ffb951;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        table {
          width: 100vw;
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

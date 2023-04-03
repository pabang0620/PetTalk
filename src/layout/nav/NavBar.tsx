import React, { useState } from 'react';
import NavModal from './NavModal';

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
          <div className="logoStyle">PetTalk</div>
          <ul className="navLeft">
            <li>커뮤니티</li>
            <li>쇼핑</li>
          </ul>
        </div>

        <div onClick={navModalOn}>icon</div>
      </nav>
      <table></table>
      {navModal === true && <NavModal />}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Noto+Sans+KR:wght@400;500&display=swap');
        .logoStyle {
          font-family: 'Kalam', cursive;
          font-size: 35px;
          font-weight: 700;
        }
        .navLeft {
          display: flex;
          flex-direction: row;
          margin: 0px 20px;
          align-items: center;
        }
        li {
          margin: 0px 10px;
          font-size: 18px;
          font-weight: 600;
        }
        nav {
          position: absolute;
          width: 100vw;
          height: 81px;
          background-color: #ff9800;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        table {
          width: 100vw;
          height: 60px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default NavBar;

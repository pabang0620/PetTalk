import SpeechBubbleTab from './SpeechBubbleTab';
import Image from 'next/image';
import Tab from './Tab';
import Link from 'next/link';
import ContentDetail from './ContentDetail';

const TabWrapper = () => {
  return (
    <>
      <div className="wrapper">
        <div className="tabWrapper">
          <Link href="/community">
            <Tab tabname="홈" routername="/community" />
          </Link>
          <Link href="/community/share">
            <Tab tabname="정보공유" routername="/community/share" />
          </Link>
          <Link href="/community/daily">
            <Tab tabname="일상" routername="/community/daily" />
          </Link>
          <Link href="/community/question">
            <Tab tabname="질문" routername="/community/question" />
          </Link>
        </div>
        <div className="mainWrapper">
          <ContentDetail />
        </div>
      </div>
      <style jsx>{`
         {
          /* background-color: #f7e3c4; 연한거
          background-color: #f4d6a8;  진한거 */
        }

        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 3vh;
          cursor: pointer;
        }
        .tabWrapper {
          margin: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .mainWrapper {
          box-sizing: border-box;
          width: 90vw;
          height: 73vh;
          border: 2.4px solid #ffb951;
          background-color: rgb(249, 245, 235);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .main {
        }
      `}</style>
    </>
  );
};

export default TabWrapper;

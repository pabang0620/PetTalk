import Image from 'next/image';

const MainImage = () => {
  return (
    <div className="flexflex">
      <div>
        <div className="test">무한 슬라이드 - 각 페이지에 대한 간략한 이미지</div>
        <div className="test">gif로 쇼핑 부분 간략하게 소개</div>
        <div className='test'>무한 슬라이드 - 커뮤니티를 간략하게 보여줄 카드</div>
        <div className="test">깃이나 각자가 맡은 역할 넣을 부분</div>
      </div>
      <style jsx>{`
        .flexflex {
          display: flex;
          justify-content: center;
        }
        .flexflex div {
          width: 95vw;
          height: 2000px;
          background-color: white;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .test {
          margin-top: 55px;
          width: 80% !important;
          height: 600px !important;
          background-color: #f9ebd777 !important;
          border: 3px solid black !important;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default MainImage;

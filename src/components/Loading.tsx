import Image from 'next/image';

const Loading = () => {
  return (
    <>
      <div className="wrapper">
        <div className="centerBox">
          <Image
            src="/images/heartBear.gif"
            alt="loading"
            width={200}
            height={200}
          />
          <span>로딩 중입니다</span>
          <span>잠시만 기다려주세요♡</span>

        </div>
      </div>
      <style jsx>{`
        .wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .centerBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 400px;
        }
      `}</style>
    </>
  );
};

export default Loading;

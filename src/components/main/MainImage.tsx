import Image from 'next/image';

const MainImage = () => {
  return (
    <>
      <img
        src="http://www.astronomer.rocks/news/photo/202001/88605_19427_4510.jpg"
        alt="강아지와고양이"
        className="temp-image"
      />
      <style jsx>{`
        .temp-image {
          height: 65vh;
        }
      `}</style>
    </>
  );
};

export default MainImage;

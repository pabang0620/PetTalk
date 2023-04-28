import RenderPersonal from './RenderPersonal';
import RenderPet from './RenderPet';

const MyPageDetail = () => {
  return (
    <>
      <div className="wholeWrapper">
        <RenderPersonal />
        <RenderPet />
      </div>
      <style jsx>{`
        .wholeWrapper {
          width: 85vw;
          height: 76vh;
          margin: auto;
          padding: 3vh 2vw 3vh 2vw;
          margin-top: 5vh;
          border: 2.4px solid#ffb951;
          background-color: rgb(249, 245, 235);
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default MyPageDetail;

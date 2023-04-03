import Bird from '/src/assets/images/BirdIcon.png';
import Cat from '/src/assets/images/CatIcon.png';
import Dog from '/src/assets/images/DogIcon.png';
import Fish from '/src/assets/images/FishIcon.png';
import Hamster from '/src/assets/images/HamsterIcon.png';
import Reptile from '/src/assets/images/ReptileIcon.png';
import Image from 'next/image';

interface TempNum {
  IconNum?: number;
}

const CircleButton = (props: TempNum) => {
  const { IconNum } = props;
  const TempList = [Bird, Cat, Dog, Fish, Hamster, Reptile];
  return (
    <>
      <div className='temp-list'>
      {TempList.map((item) => (
        <div className="circle" key={null}>
          <Image src={item} alt="실패" width={50} height={50} />
        </div>
      ))}
      </div>
      <style jsx>{`
        .temp-list {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .circle {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          background-color: #ffe0b2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px;
        }
      `}</style>
    </>
  );
};

export default CircleButton;

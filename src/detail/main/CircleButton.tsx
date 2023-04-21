import Image from 'next/image';

const CircleButton = () => {
  const IconNameList: string[] = [
    'Bird',
    'Cat',
    'Dog',
    'Fish',
    'Hamster',
    'Reptile',
    'LoveAnimal',
  ];
  const srcHandler = (name: string) => {
    return `/images/${name}Icon.png`;
  };
  return (
    <>
      <div className="iconList">
        {IconNameList.map((item) => (
          <div className="circle" key={null}>
            <Image src={srcHandler(item)} alt="실패" width={50} height={50} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .iconList {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .circle {
          /* border-radius: 50%; */
          border-radius: 23px;
          width: 80px;
          height: 80px;
          background-color: #ffe0b2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 40px;
        }
      `}</style>
    </>
  );
};

export default CircleButton;

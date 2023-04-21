interface PropsList {
  tabname: string;
  position?: string;
}

const SpeechBubbleTab = (props: PropsList) => {
  const { tabname, position } = props;
  return (
    <>
      <div className={position}>{tabname}</div>
      <style jsx>{`
				.speechBubble {
					position: relative;
          background: #ffb951;
          width: 80px;
          height: 50px;
          border-radius: 44%;
          margin: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
					font-size: 15px;
					font-weight: 600;
				}
        .left:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-top-color: #ffb951;
          border-bottom: 0;
          border-right: 0;
          margin-left: -26px;
          margin-bottom: -15px;
        }
        {/* .middle:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-top-color: #ffb951;
          border-bottom: 0;
					border-left: 0;
          margin-left: -4px;
          margin-bottom: -15px;
					transform: rotate(-25deg);
        } */}
				.middle:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-top-color: #ffb951;
          border-bottom: 0;
					border-left: 0;
          margin-left: -4px;
          margin-bottom: -15px;
					transform: rotate(-25deg);
        }
        .right:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-top-color: #ffb951;
          border-bottom: 0;
          border-left: 0;
          margin-left: -7px;
          margin-bottom: -15px;
        }
      `}</style>
    </>
  );
};

export default SpeechBubbleTab;

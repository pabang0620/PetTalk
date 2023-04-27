const TabSelectBox = () => {
  //selectbox 에 defalut로 선택되는 값 말고 "게시글종류" 이런식으로의 글이 선택되어있으면 좋을 것 같음
  return (
    <>
      <select className="selectBox" defaultValue="share">
        <option value="share">정보공유</option>
        <option value="daily">일상</option>
        <option value="question">질문</option>
      </select>
      <style jsx>{`
        .selectBox {
          width: 7vw;
          margin-left: 10px;
          height: 28px;
        }
      `}</style>
    </>
  );
};

export default TabSelectBox;

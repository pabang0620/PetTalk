const AnimalSelectBox = () => {
  //selectbox 에 defalut로 선택되는 값 말고 "동물종류" 이런식으로의 글이 선택되어있으면 좋을 것 같음
  return (
    <>
      <select className="selectBox" defaultValue="etc">
        <option value="cat">고양이</option>
        <option value="dog">강아지</option>
        <option value="bird">새</option>
        <option value="reptile">파충류</option>
        <option value="fish">어류</option>
        <option value="etc">기타</option>
      </select>
      <style jsx>{`
        .selectBox {
          width: 7vw;
          margin-left: 15px;
          height: 28px;
        }
      `}</style>
    </>
  );
};

export default AnimalSelectBox;

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CommunityTab } from './PropsType';

interface PropsList {
  setInputValue: Dispatch<SetStateAction<CommunityTab>>;
  inputValue: CommunityTab;
}

const TabSelectBox = (props: PropsList) => {
  //selectbox 에 defalut로 선택되는 값 말고 "게시글종류" 이런식으로의 글이 선택되어있으면 좋을 것 같음
  const { setInputValue, inputValue } = props;
  const changeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value as CommunityTab);
  };

  return (
    <>
      <select
        className="selectBox"
        onChange={(e) => changeFilter(e)}
        defaultValue={inputValue}
      >
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

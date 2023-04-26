import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import TabSelectBox from '@/components/TabSelectBox';
import AnimalSelectBox from '@/components/AnimalSelectBox';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const New: NextPage = () => {
  const [md, setMd] = useState<string | undefined>('글을 입력해주세요...');
  const [editorSize, setEditorSize] = useState<number>();

  useEffect(() => {
    setEditorSize(window.innerHeight * 0.65);
  }, []);
  const handleResize = () => {
    setEditorSize(window.innerHeight * 0.65);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
      <div className="editorWrapper">
        <div className="selectWrapper">
          <div className="selectBox">
            <div className="sideTitle">카테고리</div>
            <div>
              <TabSelectBox />
              <AnimalSelectBox />
            </div>
          </div>
          <div className="selectBox">
            <div className="sideTitle">제목</div>
            <label>
              <input
                className="title"
                type="text"
                placeholder="제목을 입력해주세요..."
              ></input>
            </label>
          </div>
        </div>
        {/* <div className="sampleWrapper">
          <div>
            <select className="sampleSelectBox">
              <option>개</option>
              <option>고양이</option>
              <option>새</option>
              <option>파충류</option>
              <option>기타</option>
            </select>
            <select className="sampleSelectBox">
              <option>정보공유</option>
              <option>일상</option>
              <option>질문</option>
            </select>
          </div>
          <label>
            <input
              className="sampleTitle"
              type="text"
              placeholder="제목을 입력해주세요..."
            ></input>
          </label>
        </div> */}
        <div className="editorBox">
          <MDEditor value={md} onChange={setMd} height={editorSize} />
        </div>
      </div>
      <style jsx>{`
        .sampleWrapper {
          border: solid 2px #ffb951;
          border-radius: 5px;
          height: 50px;
          width: 95%;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: rgb(253, 251, 246);
        }
        .sampleSelectBox {
          height: 30px;
          width: 10vw;
          border-radius: 5px;
        }
        .sampleSelectBox:first-child {
          margin-right: 15px;
        }
        .sampleTitle {
          width: 70vw;
          height: 26.8px;
          border: 1px solid rgba(74, 64, 49, 0.833);
          border-radius: 5px;
        }

        .editorWrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          width: 100%;
          height: 80vh;
        }
        .selectWrapper {
          height: 100px;
          width: 50%;
          display: flex;
          flex-direction: column;
          margin-bottom: 13px;
          border: solid 2px #ffb951;
          border-radius: 5px;
          background-color: rgb(253, 251, 246);
          padding: 10px;
          margin-top: 40px;
        }
        .selectBox {
          display: flex;
          align-items: center;
          height: 40px;
          margin-left: 15px;
        }
        .sideTitle {
          width: 5vw;
          display: flex;
          justify-content: center;
        }
        .title {
          width: 40vw;
          height: 25px;
          margin-left: 10px;
        }
        .editorBox {
          width: 95%;
          border: solid 2px #ffb951;
          border-radius: 5px;
          background-color: rgb(249, 245, 235);
        }
      `}</style>
    </div>
  );
};

export default New;

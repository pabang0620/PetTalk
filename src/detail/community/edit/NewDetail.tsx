import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { CommunityTab } from '@/components/PropsType';
import TabSelectBox from '@/components/TabSelectBox';
import AnimalSelectBox from '@/components/AnimalSelectBox';
import Loading from '@/components/Loading';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <Loading />,
});

const NewDtail: NextPage = () => {
  const [md, setMd] = useState<string | undefined>('글을 입력해주세요...');
  const [editorSize, setEditorSize] = useState<number>();
  const [tabValue, setTabValue] = useState<CommunityTab>('question');

  useEffect(() => {
    setEditorSize(window.innerHeight * 0.7);
  }, []);
  const handleResize = () => {
    setEditorSize(window.innerHeight * 0.7);
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
              <TabSelectBox setInputValue={setTabValue} inputValue={tabValue} />
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
        <div className="editorBox">
          <MDEditor value={md} onChange={setMd} height={editorSize} />
        </div>
      </div>
      <style jsx>{`
        .editorWrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          width: 100%;
          height: 80vh;
          margin-top: 6vh;
        
        .selectWrapper {
          height: 100px;
          width: 93.5%;
          display: flex;
          flex-direction: column;
          margin-bottom: 13px;
          border: solid 2px #ffb951;
          border-radius: 5px;
          background-color: rgb(253, 251, 246);
          padding: 10px;
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

export default NewDtail;

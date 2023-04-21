import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const New: NextPage = () => {
  const [md, setMd] = useState<string | undefined>('# Hello World');
  return (
    <div>
      <MDEditor value={md} onChange={setMd} />
    </div>
  );
};

export default New;

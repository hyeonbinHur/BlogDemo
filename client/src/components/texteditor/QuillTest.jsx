import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill 기본 스타일
import hljs from 'highlight.js'; // 코드 하이라이팅 라이브러리
import 'highlight.js/styles/atom-one-dark.css'; // 스타일
window.hljs = hljs;
import ImageResize from 'quill-image-resize-module-react'; // 이미지 리사이징 모듈
import Viewer from './Viewer';
// Quill 모듈 등록
Quill.register('modules/imageResize', ImageResize);
export default function QuillTest() {
  const quillRef = useRef(null);
  const [data, setData] = useState('');

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill('#editor-container', {
        theme: 'snow',
        modules: {
          imageResize: { modules: ['Resize'] }, // 이미지 리사이징 모듈 활성화
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['code-block'], // 코드 블록 버튼 추가
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'], // 이미지 삽입 버튼 추가
          ],
        },
      });
    }
  }, []);

  const handleContents = () => {
    if (quillRef.current) {
      const content = quillRef.current.root.innerHTML;
      console.log(`${content}`);
      setData(content);
    }
  };

  return (
    <div>
      <div id='editor-container' style={{ height: '400px' }}></div>
      <button onClick={handleContents} style={{ marginTop: '10px' }}>
        Console contents
      </button>
      <div>
        <Viewer data={data} />
      </div>
    </div>
  );
}

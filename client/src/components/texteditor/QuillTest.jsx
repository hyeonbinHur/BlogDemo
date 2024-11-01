import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill 기본 스타일
import hljs from 'highlight.js'; // 코드 하이라이팅 라이브러리
// highlight.js를 전역으로 설정
// import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/vs2015.css';
// import 'highlight.js/styles/nord.css';
import 'highlight.js/styles/atom-one-dark.css';
window.hljs = hljs;
// Quill의 Syntax 모듈을 명시적으로 등록
import { ImageActions } from '@xeger/quill-image-actions';
import Syntax from 'quill/modules/syntax';
import Viewer from './Viewer';
// import ImageResize from 'quill-image-resize';
// Quill.register({ 'modules/syntax': Syntax });
import ImageActions from '@xeger/quill-image-actions';

Quill.register('modules/imageActions', ImageActions);
export default function QuillTest() {
  const quillRef = useRef(null);
  const [data, setData] = useState('');
  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill('#editor-container', {
        theme: 'snow',
        ImageResize: {
          modules: ['Resize'],
        },
        modules: {
          syntax: true, // syntax 모듈 활성화
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

import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill 기본 스타일
import hljs from 'highlight.js'; // 코드 하이라이팅 라이브러리
import 'highlight.js/styles/github.css'; // 하이라이팅 스타일

// highlight.js를 전역으로 설정
window.hljs = hljs;

// Quill의 Syntax 모듈을 명시적으로 등록
import Syntax from 'quill/modules/syntax';
Quill.register({ 'modules/syntax': Syntax });

export default function QuillTest() {
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill('#editor-container', {
        theme: 'snow',
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

  return (
    <div>
      <div id='editor-container' style={{ height: '400px' }}></div>
    </div>
  );
}

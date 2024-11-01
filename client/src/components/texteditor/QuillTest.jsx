// import React, { useRef, useEffect, useState, useMemo } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function QuillTest() {
//   const quillRef = useRef(null);
//   const [data, setData] = useState('');

//   useEffect(() => {
//     const targetNode = document.getElementById('editor-container');
//     if (targetNode) {
//       const observer = new MutationObserver(() => {
//         // DOM 변화가 발생할 때 실행할 코드
//       });
//       observer.observe(targetNode, { childList: true, subtree: true });

//       return () => {
//         observer.disconnect();
//       };
//     }
//   }, []);

//   const formats = [
//     'font',
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'align',
//     'color',
//     'background',
//     'size',
//     'code-block',
//   ];

//   const modules = useMemo(() => {
//     return {
//       syntax: true,
//       toolbar: [
//         [{ header: [1, 2, false] }],
//         ['bold', 'italic', 'underline'],
//         ['code-block'],
//         [{ list: 'ordered' }, { list: 'bullet' }],
//         ['link', 'image'],
//       ],
//     };
//   }, []);

//   const handleContents = () => {
//     if (quillRef.current) {
//       const content = quillRef.current.getEditor().root.innerHTML;
//       console.log(content);
//       setData(content);
//     }
//   };

//   return (
//     <div>
//       <ReactQuill
//         ref={quillRef}
//         modules={modules}
//         formats={formats}
//         style={{ height: '400px' }}
//       />
//       <button onClick={handleContents} style={{ marginTop: '10px' }}>
//         Console contents
//       </button>
//     </div>
//   );
// }

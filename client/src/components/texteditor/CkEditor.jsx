// import React from 'react';
// //CKEditor
// import { useRef } from 'react';
// import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
// import {
//   ClassicEditor,
//   Bold,
//   Essentials,
//   Italic,
//   Paragraph,
//   Undo,
//   List,
//   CodeBlock,
//   Image,
//   ImageToolbar,
//   ImageCaption,
//   ImageStyle,
//   ImageResize,
//   ImageUpload,
// } from 'ckeditor5';

// import 'ckeditor5/ckeditor5.css';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import JSXParser from 'react-jsx-parser';
// import parse from 'react-html-parser';

// const TestComponent = ({ jsxString }) => {
//   const editorRef = useRef();
//   const [currentHTML, setCurrentHTML] = useState('');
//   const handleSave = () => {
//     // editorRef.current 인스턴스를 통해 작성된 내용 가져오기
//     const editorInstance = editorRef.current.editorInstance;
//     const content = editorInstance.getData(); // 에디터 내용 가져오기 (HTML 형식)
//     console.log(typeof content);
//     setCurrentHTML(content);
//     // 필요 시 서버에 전송하거나 다른 작업 수행
//   };

//     return (
//       <JSXParser
//         components={{ SyntaxHighlighter }}
//         bindings={{ atomOneDark }}
//         jsx={jsxString}
//       />
//     );
//   };
// export default function CkEditor() {
//   return (
//     <div>
//       <div
//         style={{
//           border: '1px solid black',
//           width: '50rem',
//           height: '50rem',
//           marginBottom: '10rem',
//         }}
//       >
//         <CKEditor
//           editor={ClassicEditor}
//           onReady={(editor) => {
//             editorRef.current = { editorInstance: editor };
//           }}
//           config={{
//             toolbar: {
//               items: [
//                 'undo',
//                 'redo',
//                 'bold',
//                 'italic',
//                 'codeBlock',
//                 'imageUpload',
//               ],
//             },
//             plugins: [
//               Essentials,
//               Bold,
//               Italic,
//               Paragraph,
//               Undo,
//               CodeBlock,
//               Image,
//               ImageResize,
//               ImageToolbar,
//               ImageUpload,
//               ImageCaption,
//               ImageStyle,
//             ],
//             initialData: '<p>Start editing with CKEditor 5!</p>',
//           }}
//         />
//         <button onClick={handleSave}>Save Content</button>
//       </div>
//     </div>
//   );
// }

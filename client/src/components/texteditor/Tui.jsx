///TUI test -> not support image resizing functionalities, might be unable to customize codeblocks with specific language.

// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
// // import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
// // import 'prismjs/themes/prism-vsc-dark-plus.css';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
// import 'prismjs/themes/prism.css'; // 다크 테마
// import Prism from 'prismjs';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// 또는 다른 테마

import React from 'react';

export default function Tui() {
  return (
    <div>
      {/* <Editor
        initialValue='hello react editor world!'
        previewStyle='vertical'
        height='600px'
        initialEditType='markdown'
        useCommandShortcut={true}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      /> */}
    </div>
  );
}

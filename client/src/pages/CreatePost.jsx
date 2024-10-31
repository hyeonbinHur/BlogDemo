import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/post_api';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

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

export default function CreatePost() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const { mutate: mutateCreatePost } = useMutation({
    mutationFn: (newPost) => {
      console.log(newPost);
      return api.createPost(newPost);
    },
    onSuccess: (data) => {
      console.log('Post created successfully:', data);
      alert('Post created successfully!');
      queryClient.invalidateQueries('getPosts');
    },
    onError: (error) => {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    },
    onSettled: () => {
      console.log('Mutation has settled (either success or error).');
    },
  });

  const onSubmit = (data) => {
    mutateCreatePost(data);
  };

  /**
   * Testing purpost
   *
   */

  const { data: posts, refetch } = useQuery({
    queryKey: ['getPosts'],
    queryFn: () => api.readPosts(),
    enabled: false,
  });

  useEffect(() => {
    if (posts) {
      console.log('Fetched posts:', posts);
    }
  }, [posts]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '70vw',
          height: '100vh',
        }}
      >
        <Stack gap={3}>
          <Button onClick={() => refetch()}>Read Posts</Button>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='title'
                style={{ border: '1px solid black' }}
                {...register('title')} // 폼 데이터 등록
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                style={{ border: '1px solid black' }}
                {...register('body')} // 폼 데이터 등록
              />
              <Button
                type='submit'
                style={{ marginTop: '2rem', float: 'right' }}
                disabled={isSubmitting} // 폼 제출 중 버튼 비활성화
              >
                Create new post
              </Button>
            </Form.Group>
          </Form>
        </Stack>
      </div>
      <div>Text Editor Test</div>
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

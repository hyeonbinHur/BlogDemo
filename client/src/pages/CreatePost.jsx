import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/post_api';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
// import QuillTest from '../components/texteditor/QuillTest';

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
        gap: '5rem',
      }}
    >
      <div
        style={{
          width: '40%',
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

              {/* <QuillTest /> */}

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
        <div>{/* <QuillTest /> */}</div>
      </div>
      <div
        style={{
          padding: '1rem',
          borderRadius: '1rem',
          width: '40%',
          height: '100vh',
          border: '1px solid black',
        }}
      >
        Hello world
      </div>
    </div>
  );
}

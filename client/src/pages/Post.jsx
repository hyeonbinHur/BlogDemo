import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as api from '../api/comment_api';
import ListGroup from 'react-bootstrap/ListGroup';
import './Post.scss';
import Comment from '../components/Comment';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();
  const queryClient = useQueryClient();

  // react query http requests

  const { data: comments } = useQuery({
    queryKey: ['get comments'],
    queryFn: () => api.readComments(id),
  });

  const { mutate: mutateCreateComment } = useMutation({
    mutationFn: (newComment) => {
      console.log(newComment);
      return api.createComment(newComment);
    },
    onSuccess: (data) => {
      console.log('Comment created successfully:', data);
      alert('Comment created successfully!');
      queryClient.invalidateQueries('get comments');
      reset();
    },
    onError: (error) => {
      console.error('Error creating comment:', error);
      alert('Failed to create post.');
    },
    onSettled: () => {
      console.log('Mutation has settled (either success or error).');
    },
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/test/api/post/${id}`).then((response) => {
      setPostData(response.data[0]);
    });
  }, [id]);

  // Event handler
  const handleCommentSubmit = (data) => {
    const newComment = data;
    newComment.post_uuid = id;
    mutateCreateComment(newComment);
  };

  console.log(postData);
  return (
    <div className='postMainContainer'>
      <div className='postTitle'>{postData.title}</div>
      <div className='postBody'>{postData.body}</div>

      <Form
        style={{ width: '80%' }}
        onSubmit={handleSubmit(handleCommentSubmit)}
      >
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Create Comment</Form.Label>
          <Form.Control as='textarea' rows={3} {...register('content')} />
        </Form.Group>
        <Button type='submit' style={{ marginTop: '2rem', float: 'right' }}>
          Comment
        </Button>
      </Form>
      {comments && (
        <ListGroup style={{ width: '80%' }}>
          <h3> Comments </h3>
          {comments.map((e) => (
            <Comment comment={e} key={e.comment_uuid} />
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Post;

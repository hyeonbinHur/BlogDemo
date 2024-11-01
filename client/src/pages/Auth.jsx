import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/user_api';

export default function Auth() {
  const form1 = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = form1;

  // 두 번째 폼의 useForm
  const form2 = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = form2;

  const queryClient = useQueryClient();

  //sign up
  const { mutate: mutateSignUpUser } = useMutation({
    mutationFn: (userInfo) => {
      return api.signUpUser(userInfo);
    },
    onSuccess: (userInfo) => {
      console.log('Post created successfully:', userInfo);
      alert('user signed up successfully!');
      queryClient.invalidateQueries('User Sign Up');
    },
    onError: (error) => {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    },
    onSettled: () => {
      console.log('Mutation has settled (either success or error).');
    },
  });

  //sign in
  const { mutate: mutateSignInUser } = useMutation({
    mutationFn: (userInfo) => {
      console.log(userInfo);
      return api.signInUser(userInfo);
    },
    onSuccess: (data) => {
      alert('User signed in successfully!');
      queryClient.invalidateQueries('getPosts');
    },
    onError: (error) => {
      console.error('Error creating post:', error);
      alert('Failed to sign in.');
    },
    onSettled: () => {
      console.log('Mutation has settled (either success or error).');
    },
  });

  //sign up handler
  const handleSignUp = (userInfo) => {
    mutateSignUpUser(userInfo);
  };
  //sign in handler
  const handleSignIn = (userInfo) => {
    mutateSignInUser(userInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5rem',
      }}
    >
      <Form
        onSubmit={handleSubmit1(handleSignUp)}
        style={{
          width: '30%',
          border: '1px solid black',
          borderRadius: '1rem',
          padding: '1rem',
        }}
      >
        <h3>Sign Up</h3>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Id</Form.Label>
          <Form.Control
            style={{ border: '1px solid gray' }}
            type='text'
            required
            placeholder='name@example.com'
            {...register1('id')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            style={{ border: '1px solid gray' }}
            type='text'
            required
            rows={3}
            {...register1('name')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{ border: '1px solid gray' }}
            type='password'
            required
            rows={3}
            {...register1('pw')}
          />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>

      <Form
        style={{
          width: '30%',
          border: '1px solid black',
          borderRadius: '1rem',
          padding: '1rem',
        }}
        onSubmit={handleSubmit2(handleSignIn)}
      >
        <h3>Sign In</h3>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Id</Form.Label>
          <Form.Control
            style={{ border: '1px solid gray' }}
            type='text'
            required
            placeholder='name@example.com'
            {...register2('id')}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{ border: '1px solid gray' }}
            type='password'
            required
            rows={3}
            {...register2('pw')}
          />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

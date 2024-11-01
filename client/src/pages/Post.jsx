import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api/comment_api';
import ListGroup from 'react-bootstrap/ListGroup';
import './Post.scss';
import Comment from '../components/Comment';

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);

  const { data: comments } = useQuery({
    queryKey: ['get comments'],
    queryFn: () => api.readComments(id),
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/test/api/post/${id}`).then((response) => {
      setPostData(response.data[0]);
    });
  }, [id]);

  console.log(postData);
  return (
    <div className='postMainContainer'>
      <div className='postTitle'>{postData.title}</div>
      <div className='postBody'>{postData.body}</div>
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

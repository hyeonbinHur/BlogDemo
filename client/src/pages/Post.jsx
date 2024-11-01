import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Post.scss';
const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);

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
    </div>
  );
};

export default Post;

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Feed.scss';

const Feed = ({ title }) => {
  const [feedTitle, setFeedTitle] = useState(title);

  useEffect(() => {
    setFeedTitle(title);
  }, [title]);

  return <div className='feedMainContainer'>{feedTitle}</div>;
};

export default Feed;

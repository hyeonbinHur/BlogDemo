import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Feed.scss';

const Feed = ({ title, id }) => {
  const [feedTitle, setFeedTitle] = useState(title);

  useEffect(() => {
    setFeedTitle(title);
  }, [title]);

  return (
    <Link className='feedMainContainer' to={`/feeds/${id}`}>
      <div>{feedTitle}</div>
    </Link>
  );
};

export default Feed;

import axios from 'axios';
import { useState, useEffect } from 'react';
import Feed from '../components/Feed';
import './Feeds.scss';

const Feeds = () => {
  const [parmsData, setParmsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/test/api/post').then((response) => {
      setParmsData(response.data);
    });
  }, []);
  console.log(parmsData);

  return (
    <div className='feedList'>
      {parmsData &&
        parmsData.map((elem, idx) => {
          return <Feed key={idx} title={elem.title} id={elem.post_uuid} />;
        })}
    </div>
  );
};

export default Feeds;

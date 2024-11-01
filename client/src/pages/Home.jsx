import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams();
  const [parmsData, setParmsData] = useState();
  useEffect(() => {
    setParmsData(params);
  }, [params]);

  return (
    <>
      <div className='main-container'></div>
    </>
  );
};

export default Home;

import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  function clickBtn() {
    axios.get("http://localhost:3000/test/api/tests").then((response) => {
      console.log(response.data); // 응답 데이터 출력
    });
  }

  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <button className="communicationBtn" onClick={clickBtn}>
            버튼
          </button>
          <div>Hello world</div>
        </div>
      </div>
    </>
  );
};

export default Home;

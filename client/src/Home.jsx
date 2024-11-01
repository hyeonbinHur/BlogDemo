import axios from "axios";

const Home = () => {
  function clickBtn1() {
    axios.get("http://localhost:3000/test/api/tests").then((response) => {
      console.log(response.data[0]); // 응답 데이터 출력
    });
  }

  function clickBtn2() {
    axios
      .get("http://localhost:3000/test/api/post")
      .then((response) => {
        console.log(response.data); // response.data로 실제 데이터에 접근
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function clickBtn3() {
    axios.get("http://localhost:3000/test/api/tests/:1").then((response) => {
      console.log(response); // 응답 데이터 출력
    });
  }

  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <button className="communicationBtn1" onClick={clickBtn1}>
            버튼
          </button>
          <button className="communicationBtn2" onClick={clickBtn2}>
            버튼
          </button>
          <button className="communicationBtn3" onClick={clickBtn3}>
            버튼
          </button>
          <div>Hello world</div>
        </div>
      </div>
    </>
  );
};

export default Home;

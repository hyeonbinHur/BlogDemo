const apis = require("../handler/api.js");
const iconv = require("iconv-lite");

iconv.encodingExists("cesu8"); // 이 라인은 iconv-lite에서 cesu8을 인식하도록 합니다.

const mockRequest = {};

const mockResponse = {
  status: jest.fn(() => mockResponse),
  send: jest.fn(),
  json: jest.fn(),
};

describe("first test", () => {
  it("should get data from the test table", (done) => {
    // 예상되는 결과 값을 정의합니다.
    const expectedData = [
      {
        test_uuid: 1,
        title: "first test title",
        body: "first test body",
      },
    ];
    // mockResponse.json이 호출될 때 전달된 값을 확인합니다.
    mockResponse.json.mockImplementation((data) => {
      try {
        expect(data).toEqual(expectedData); // 예상 데이터와 실제 반환 데이터 비교
        done(); // 테스트 성공 시 done() 호출
      } catch (error) {
        done(error); // 테스트 실패 시 에러 전달
      }
    });
    // testApi 함수 호출
    apis.testApi(mockRequest, mockResponse);
  });
});

afterAll(async () => {
  await new Promise((resolve, reject) => {
    apis.connection.end((err) => (err ? reject(err) : resolve()));
  });
});

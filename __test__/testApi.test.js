const apis = require("../handler/api.js");
const iconv = require("iconv-lite");
iconv.encodingExists("cesu8"); // 이 라인은 iconv-lite에서 cesu8을 인식하도록 합니다.
const mockRequest = {};
const mockResponse = {
    status: jest.fn(() => mockResponse),
    send: jest.fn(),
    json: jest.fn(),
};

describe("first test", () => { // 1. jest가 실행된다
    it("should get data from the test table", (done) => {
// 예상되는 결과 값
const expectedData = [ // 2. 원하는 기댓값을 설정한다
    {
        test_uuid: 1,
        title: "first test title",
        body: "first test body",
},
];
mockResponse.json.mockImplementation((data) => { // 3. 기댓값이 같다면 pass
    try {
        expect(data).toEqual(expectedData); // 4. 예상 데이터와 실제 반환

        done(); // 테스트 성공 시 done() 호출
} catch (error) { // 다르다면 //fail
        done(error); // 테스트 실패 시 에러 전달
}
});
// testApi 함수 호출
apis.testApi(mockRequest, mockResponse); // 5. 아까 만든 함수를 실행시키고 결과값을 리

});
});
afterAll(async () => {
await new Promise((resolve, reject) => {
apis.connection.end((err) => (err ? reject(err) : resolve()));
});
})
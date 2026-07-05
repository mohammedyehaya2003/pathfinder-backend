const request = require("supertest");
const app = require("../../app");

describe("Home Route", () => {
  test("should return PathFinder Backend Running", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("PathFinder Backend Running");
  });
});
const request = require("supertest");
const app = require("../../app");

describe("Authentication API", () => {
  test("should return validation error when register data is empty", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({});

    expect(response.statusCode).toBe(400);

    expect(response.body.success).toBe(false);
  });

  test("should return validation error when login data is empty", async () => {
  const response = await request(app)
    .post("/api/auth/login")
    .send({});

  expect(response.statusCode).toBe(400);
  expect(response.body.success).toBe(false);
});

});
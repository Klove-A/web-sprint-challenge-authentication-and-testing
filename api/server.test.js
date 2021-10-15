const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.destroy();
});

test("sanity", () => {
  expect(true).toBe(true);
});

describe("[POST] /api/auth/register", () => {
  beforeEach(async () => {
    await request(server)
      .post("/api/auth/register")
      .send({ username: "greg", password: "1234" });
  });
  test("[1]registering user increase his legs of users table", async () => {
    const users = await db("users")
    expect(users).toHaveLength(1)
  })
});

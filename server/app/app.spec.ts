import request from "supertest";

import app from ".";
import { BASE_URL } from "./constants";

describe("app", () => {
  it("should work", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200, { status: "ok", route: "/" });
  });

  it("should return 200 OK for a custom route", () => {
    return request(app)
      .get(`${BASE_URL}/`)
      .expect("Content-Type", /json/)
      .expect(200, { status: "ok", route: `${BASE_URL}/` });
  });
});

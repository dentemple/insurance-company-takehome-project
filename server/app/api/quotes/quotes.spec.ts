import express from "express";
import request from "supertest";

import router from "./router";
import * as constants from "./constants";

const app = express();
app.use(router);

describe("quotes endpoints", () => {
  const {
    QUOTES_BASE_URL: baseUrl,
    BASE_QUOTE_DATA: baseInsuranceApplication,
    DEFAULT_PRICE: defaultPrice,
  } = constants;

  it("should start a new quote", () => {
    const reqBody = { firstName: "foo", lastName: "bar" };
    return request(app)
      .post(`${baseUrl}/`)
      .send(reqBody)
      .expect((res) => {
        console.log(".spec", res.body);
      })
      .expect("Content-Type", /json/)
      .expect(200, { resume: expect.any(String) });
  });

  xit("should start a new quote with the expected data", () => {
    const reqBody = {};
    return request(app)
      .post(`${baseUrl}/`)
      .send(reqBody)
      .expect("Content-Type", /json/)
      .expect(200, { resume: expect.any(String) });
  });

  xit("should retrieve the current quote", () => {
    return request(app)
      .get(`${baseUrl}/:resume`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject(baseInsuranceApplication);
      });
  });

  xit("should update the current quote", () => {
    const reqBody = { name: { firstName: "foo", lastName: "bar" } };
    return request(app)
      .put(`${baseUrl}/:resume`)
      .send(reqBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject(baseInsuranceApplication);
      });
  });

  xit("should validate the quote", () => {
    const reqBody = {};
    return request(app).post(`${baseUrl}/:resume`).send(reqBody).expect(200);
  });

  xit("should return a price", () => {
    const reqBody = {};
    return request(app)
      .post(`${baseUrl}/:resume`)
      .send(reqBody)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject({ price: defaultPrice });
      });
  });
});

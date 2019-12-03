const chai = require("chai");

const mongoose = require("mongoose");
//const User = require("../models/User");

//require dev Dependencies

const chaiHttp = require("chai-http");
const server = require("../server");
//const user = require("../routes/api/users");

const assert = chai.assert;
var expect = chai.expect;
chai.use(chaiHttp);

// ### INCLUDE DEFAULT ESTIMATE ROUTE AND MODELS(APPART AND HOUSE)

// Parent Testing Block
describe("DefaultEstimation", () => {
  /*beforeEach(done => {
    // Before each tests clear the Database
    User.remove({}, err => {
      done();
    });
  });
*/
  /**
   * @test
   * /POST api/estimate/default/house
   */
  describe("POST api/estimate/default/house", done => {
    it("all_users_can_estimate_default_house", () => {});
  });

  /**
   * @test
   * /POST api/estimate/default/appartment
   */
  describe("POST api/estimate/default/appartment", done => {
    it("all_users_can_estimate_default_appartment", () => {});
  });

  /**
   * @test
   * /POST api/estimate/default/house/save
   * save data of default house and its estimation
   * User must be authenticated
   */
  describe("POST api/estimate/default/house/save", done => {
    it("all_authenticated_users_can_save_house_estimate", () => {});
  });

  /**
   * @test
   * /POST api/estimate/default/appartment/save
   * save data of default appartment and its estimation
   * User must be authenticated
   */
  describe("POST api/estimate/default/appartment/save", done => {
    it("all_authenticated_users_can_save_appartment_estimate/save", () => {});
  });

  /**
   * @test
   * /POST api/estimate/default/house/save
   * save data of default house and its estimation
   * unauthenticated 401
   */
  describe("POST api/estimate/default/house/save", done => {
    it("unauthenticated_users_cannot_save_house_estimate", () => {});
  });

  /**
   * @test
   * /POST api/estimate/default/appartment/save
   * save data of default appartment and its estimation
   * unauthenticated 401
   */
  describe("POST api/estimate/default/appartment/save", done => {
    it("unauthenticated_users_cannot_save_appartment_estimate/save", () => {});
  });
});

/* 
Tests to write  :
  all_users_can_estimate_default_house()
  all_users_can_estimate_default_appartment()
  all_authenticated_users_can_save_house_estimate()
  all_authenticated_users_can_save_appartment_estimate()
  unauthenticated_users_cannot_save_house_estimate()
  unauthenticated_users_cannot_save_appartment_estimate()
*/

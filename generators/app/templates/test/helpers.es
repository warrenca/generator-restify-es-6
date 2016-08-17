import request from "supertest";
import consign from "consign";
import moment from "moment";
import app from "../server";
import chai from "chai";


global.app = app;
global.moment = moment;
global.consign = consign;
global.request = request;
global.expect = chai.expect;

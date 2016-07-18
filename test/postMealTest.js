var should = require('should');
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');

describe('Routing', function() {
  var url = 'http://localhost:3000';

  before(function(done) {
    done();
  });
  describe('POST', function() {
    var testTask = {name: "testing_post", calories: 0, date: "2016-01-26:12:03:10"};
    it('status should be 200', function(done) {
    request(url)
  	.post('/meals')
  	.send(testTask, done())

  	.end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 200);

      });
    });

    it("response is // {status: 'ok'} //", function(done) {
    var testTask = {name: "testing_post", calories: 0, date: "2016-01-26:12:03:10"};
    request(url)
    .post('/todos')
    .send(testTask, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 200);
      res.body.text.should.equal("ok");
      });
    });

    it('no complete body throws 404', function(done) {
    var testTask = {calories: 0, date: "2016-01-26:12:03:10"};
    request(url)
    .post('/todos')
    .send(testTask, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 404);
      });
    });

    it("invalid date value throws 404", function(done) {
    var testTask = {name: "testing_post", calories: 0, date: "today"};
    request(url)
    .post('/todos')
    .send(testTask, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 404);
      });
    });

    it("plain text request object throws 404", function(done) {
    var testTask = "hy";
    request(url)
    .post('/todos')
    .send(testTask, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 404);
      });
    });

  });
});

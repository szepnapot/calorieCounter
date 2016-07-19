var should = require('should');
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');

describe('Routing', function() {
  var url = 'http://localhost:3000';

  before(function(done) {
    done();
  });
  describe('GET /MEALS', function() {
    it('status should be 200', function(done) {
    request(url)
  	.get('/meals')
  	.send(null, done())

  	.end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 200);

      });
    });

    it("sends back response", function(done) {
    request(url)
    .get('/meals')
    .send(null, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('status', 200);
      res.body.should.equal("ok");
      });
    });

    it("response is JSON", function(done) {
    request(url)
    .get('/meals')
    .send(null, done())
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      should(res).have.property('content-type', 'text');
      });
    });
  });
});

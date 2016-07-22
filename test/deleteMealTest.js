'use strict';

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var winston = require('winston');

describe('Routing', function() {
  var url = 'http://localhost:3000';

  describe('DELETE /meals/:id', function() {
    var testId;
    before(function(done){
      request(app)
      .get('/meals')
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        console.log(res);
        testId = res.body[0]._id;
        done();
    })
  });


  //   it('status should be 200', function(done) {
  //     console.log(testId);
  //   request(app)
  // 	.del(url + testId)
  //   .expect(200, done());
  //   });
  //
  //   it("sends back // {'status': 'ok'} // ", function(done) {
  //     console.log(testId);
  //   request(app)
  //   .del(url + testId)
  //   .expect({'status': 'ok'}, done());
  //   });
  //
  //   it("status 404", function(done) {
  //     console.log(testId);
  //   request(app)
  //   .del(url + testId)
  //   .expect(404, done());
  //   });
  //
  //   it("response is JSON", function(done) {
  //     console.log(testId);
  //   request(app)
  //   .del(url + testId)
  //   .expect(200)
  //   .expect('Content-Type', 'application/json', done());
  // });
});
});

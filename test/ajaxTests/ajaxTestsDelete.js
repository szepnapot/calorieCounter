
var host = 'http://jsonplaceholder.typicode.com';


function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
}

describe('Tests for DELETE', function () {

  var flag = false;
  beforeEach(function(done) {
    setTimeout(function(){
       flag = true;
       // complete the async beforeEach
       done();
     }, 500);
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
        this.requests.push(xhr);
    }.bind(this);
  });

  afterEach(function () {
      this.xhr.restore();
  });

;


  //Tests etc. go here
  it("flag should be true", function(){
  assert(flag === true);
});
it('request status should be DELETE', function(done) {
var data = { foo: 'bar' };
var dataJson = JSON.stringify(data);

ajax.makeRequest('DELETE', '/posts/1', data, function(err, result) {
  done();
});
this.requests[0].method.should.equal('DELETE');
this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
});

  it('should send given data as JSON body', function() {
  var data = { hello: 'world' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('DELETE', '/posts/1', data, function() {
    done();
  });

  this.requests[0].requestBody.should.equal(dataJson);
});

  it('has request headers', function(done) {
  var data = { foo: 'bar' , userID: 1};
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('delete', '/posts/1', '', function(err, result) {
    done();
  });
  this.requests[0].requestHeaders.should.have.property('content-type');
  this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });



  });

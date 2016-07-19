var host = 'http://jsonplaceholder.typicode.com';


function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
}

describe('Tests for POST', function () {

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
  it('request status should be POST', function(done) {
  var data = { foo: 'bar' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('POST', '/posts/1', data, function(err, result) {
    done();
  });
  this.requests[0].method.should.equal('POST');
  this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  it('should send given data as JSON body', function() {
  var data = { hello: 'world' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('POST', '/posts', data, function() {
  done()});

  this.requests[0].requestBody.should.equal(dataJson);
});

  it('has request headers', function(done) {
  var data = { foo: 'bar' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('PUT', '/posts/1', '', function(err, result) {
    done();
  });
  this.requests[0].requestHeaders.should.have.property('content-type');
  this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });


});

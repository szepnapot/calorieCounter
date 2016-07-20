var host = 'http://jsonplaceholder.typicode.com';


function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
}

describe('Tests for GET', function () {
  var flag = false;
  beforeEach(function(done) {
    setTimeout(function(){
       flag = true;
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


  //Tests etc. go here
  it("flag should be true", function(){
  assert(flag === true);
});

  it('request status should be GET', function(done) {
  var data = { foo: 'bar' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('GET', '/posts/1', '', function(err, result) {
    done();
  });
  this.requests[0].method.should.equal('GET');
  this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
});

  it('has request headers', function(done) {
  var data = { foo: 'bar' };
  var dataJson = JSON.stringify(data);

  ajax.makeRequest('GET', '/posts/1', '', function(err, result) {
    done();
  });
  this.requests[0].requestHeaders.should.have.property('content-type');
  this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  it('should parse fetched data as JSON', function(done) {
    var data = { foo: 'bar' };
    var dataJson = JSON.stringify(data);

  ajax.makeRequest('GET', '/posts/1', '', function(err, result) {
      result.should.deep.equal(data);
      done();
    });
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  });

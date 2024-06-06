var http = require('http'),
httpProxy = require('http-proxy');
var cluster = require('cluster');


if (cluster.isMaster) {
  cluster.fork();

  cluster.on('exit', function(worker, code, signal) {
    cluster.fork();
  });
}


if (cluster.isWorker) {
  //
  // Create a proxy server with custom application logic
  //
  var proxy = httpProxy.createProxyServer();//{target:'http://localhost:9000'}
  
  //
  // Create your custom server and just call `proxy.web()` to proxy
  // a web request to the target passed in the options
  // also you can use `proxy.ws()` to proxy a websockets request
  //
  var server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    
    //url: '/ava',
    //method: 'GET',
    const {url,method} = req;
    const {pathname} = url
    
    try{
      if(url?.startsWith('/t/')||url?.startsWith('/r/')){
        console.log('req[jv]',method,url,pathname);
        proxy.web(req, res, { target: 'http://127.0.0.1:8080' }); 
        return; 
      }
      console.log('req[js]',method,url,pathname);
      proxy.web(req, res, { target: 'http://127.0.0.1:3000' });
    }catch(e){
      console.error("Server is not up")
    }
    
  });
  
  console.log("listening on port 9000")
  server.listen(9000);
}
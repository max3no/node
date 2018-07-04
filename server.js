const app = require('./backend/app.js');
const debug = require('debug')('node-angular');
const http = require('http');

//to check valid port number
const normalizePort = val => {
  var port = parseInt(val,10);

  if(isNaN(port)){
    // named pipe
    return val;
  }

  if(port >=  0){
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if(error.syscall !== 'listen'){
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch(error.code){
    case "EACCES":
      console.error(bind+ " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind+ " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " +addr : "port " + port;
};

const port = normalizePort(process.env.PORT || "1338");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
const http = require('http');

http.createServer((req,res)=>{

    res.write('Hello Docker Jenkins');

    res.end();

}).listen(3000);

console.log('Running on port 3000');
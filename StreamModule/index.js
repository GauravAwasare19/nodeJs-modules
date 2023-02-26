 const fs = require("fs");
 const http = require("http");

 const server = http.createServer();

 server.on('request',(req,res)=>{
   /*
    fs.readFile('hello.txt',(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });*/

    const rstream = fs.createReadStream("hellof.txt");

    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });

    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err);
        res.end("file not found");
    })
 })

 server.listen(8000,"127.0.0.1")
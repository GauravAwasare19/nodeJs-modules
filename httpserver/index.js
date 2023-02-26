const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.end("This is Home Page");
    }
    else if(req.url == "/about")
    {
        res.end("This is About Page");
    }
    else if(req.url == "/contact")
    {
        res.end("This is Contact Page");
    }
    else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>404 Error</h1>");
    }
    
})

server.listen(3000, "127.0.0.1",()=>{
    console.log("listening to port on 3000")
});
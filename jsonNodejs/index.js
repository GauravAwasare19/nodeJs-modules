const fs = require("fs");

const bioData = {
    name: "Gaurav",
    age: 20,
    body:"lean"
}
/*
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);*/

const jsonData = JSON.stringify(bioData);             //conveting the original file to Json


/*fs.writeFile('json1.json',jsonData,(err)=>{      //reading the file
    console.log("Done");
})*/


fs.readFile("json1.json","utf-8",(err,data)=>{
   // console.log(data);
   const orgData = JSON.parse(data);                //converting back to original data from Json
   console.log(orgData);
})


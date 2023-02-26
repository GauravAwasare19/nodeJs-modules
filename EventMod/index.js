const EventEmitter = require('events');

const event = new EventEmitter();

/*
event.on("sayMyName",()=>{               //here we listen the event sayMyName
    console.log("My name is gaurav");
})
event.on("sayMyName",()=>{               //multiple callback of same function
    console.log("My name is Moreshwar");
})

event.on("sayMyName",()=>{               //same here 
    console.log("My name is Awasare");
})


event.emit("sayMyName");            //here we emit the event

*/

event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and page is ${msg}`);
})

event.emit("checkPage",200,"ok");

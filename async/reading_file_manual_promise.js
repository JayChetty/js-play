//callback
var fs = require('fs');

//What is a promise.  An object that represents a value that might not be available yet.
//A function can return a promise rather than receiving a callback..
//You can call the then method on an object.  This will get the value of the object that has returned.


//making a promise returning function from scratch??
function fileReader(fileName){
  const myPromiseThing = {}

  myPromiseThing.then = function(resolver){
    this.resolver = resolver;
  };

  myPromiseThing.resolver = function(){console.log("resolver hasnt been set yet")}

  fs.readFile(fileName,  "utf-8", (err, data)=>{
    if(err){
      null
    }else{
      myPromiseThing.resolver(data)
    }
  })

  return myPromiseThing
}

const mp = fileReader("stuff.txt")
mp.then((data)=>{
  console.log("Got data", data);
})
// .catch((err)=>{
//   console.log("Didnt work", err);
// })

//callback,  function takes in a function and calls it at some point.

//promise,   function returns an object that will call a resolve/reject method at some point.
//  you can set that method using then catch to set the behaviour of what will happe.

//What is a promise.  An object that represents a value that might not be available yet.
//A function can return a promise rather than receiving a callback.  You can set the resolve behaviour using then or reject
//behaviour using catch.
//You can call the then method on an object.  This will get the value of the object that has returned.

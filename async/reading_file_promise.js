
var fs = require('fs');


//making a promise returning function and using it
function fileReader(fileName){
  return new Promise( (resolve, reject)=>{
    fs.readFile(fileName,  "utf-8", (err, data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

fileReader("stuff.txt")
.then((data)=>{
  console.log("Got data", data);
})
.catch((err)=>{
  console.log("Didnt work", err);
})

//What is a promise.  An object that represents a value that might not be available yet.
//A function can return a promise rather than receiving a callback..
//You can call the then method on an object.  This will get the value of the object that has returned.

var fs = require('fs');
fs.readFile("stuff.txt",  "utf-8", (err, data)=>{
  if(err){
    console.log("error")
  }else{
    console.log("got stuff 1", data)
  }
})

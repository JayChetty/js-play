var fs = require('fs');

function* main(){
  var data = yield( reader() )
  console.log("data", data)
}

var it = main();
it.next();


function reader(){
  fs.readFile("stuff.txt",  "utf-8", (err, data)=>{
    if(err){
      console.log("error")
    }else{
      // console.log("got stuff 1", data)
      it.next(data)
    }
  })
}


//
// reader = reader();
// reader.next();
// reader.next();

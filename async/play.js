console.log("Hello")

// setTimeout(() =>console.log("Hello"), 1000);

function promiseReturningFunction( allGood ){
  return new Promise(function(resolve, reject){
    if(allGood){
      resolve(1)
    }else{
      reject()
    }
  })
};

promiseReturningFunction(true)
.then((passedIn)=>{
  console.log("All Good", passedIn)
})
.then((passedIn)=>{
  console.log("All Good again", passedIn)
})
.catch((passedIn)=>{
  console.log("Not All Good")
})

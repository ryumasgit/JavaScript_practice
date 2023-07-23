var str = "webcamp"

function foo(){
  console.log(str)
  var str = "webcamp"
  console.log(str)
}

console.log(str)
foo()
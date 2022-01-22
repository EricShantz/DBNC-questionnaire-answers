function processNumber(num){
  if(num % 2 == 0){
    console.log("candy")
  }
  if(Number.isInteger(num/11)){
    console.log('bar')
  }
  if (Number.isInteger(num/22)){
    console.log('candybar')
  }
  if(num % 2 != 0 && !Number.isInteger(num/22) && !Number.isInteger(num/11)){
    console.log(num)
  }
}

processNumber(44)


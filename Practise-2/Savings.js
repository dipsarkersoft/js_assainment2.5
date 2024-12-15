function monthlySavings(arr, x) {
  if (!Array.isArray(arr) || typeof x != "number") {
    return "Invalid Input"
  } 
  else {
  var ans=0

    for (v of arr){
       if(v >= 3000){
        per=v-v*0.2
        ans+=per        
    }
    else{
        ans+=v
    }}
    ans-=x
    
    if(ans <0){
        return "Earn More"
    }
    else{
        return ans
    }
    


    }

   
}

let res = monthlySavings([900, 2700, 3400],10000)

console.log(res)
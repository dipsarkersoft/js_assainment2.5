
let N = parseInt(prompt("Number: "));

if((N%4==0 && N%100!=0 ) || (N%4==0)){
    console.log(`${N} Is Leap Year `)
}
else{
    console.log(`${N} Is Not Leap Year `)
}
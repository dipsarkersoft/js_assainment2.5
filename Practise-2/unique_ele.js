var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

for(let i=0;i<numbers.length-1;){
    if(numbers[i]==numbers[i+1]){
        numbers.splice(i+1,1)
    }
    else{
        i++
    }
}
console.log(numbers)
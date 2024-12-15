var friends = ["rahim", "karim", "abdul", "sadsd", "heroalom"];
var ans=friends[0]

for(let i=1;i<friends.length;i++){
    if(friends[i].length >ans.length){
        ans=friends[i]
    }
}
console.log(ans)
function insertDash(num) {
   var result = [];
   var num = num.toString().split("");
 for(i = 0; i < num.length; i++){
  var currentNum = num[i];
  var nextNum = num[i+1];
  if(currentNum%2 === 1 && nextNum%2 === 1){
    result.push(num[i]+ '-');
  } else{
    result.push(num[i]);
  }
}
return(result.join(''))
}
function isNice(arr){
    var checkArr = []
    for(var i = 0; i< arr.length; i++){
      if(arr.includes(arr[i]+1)|| arr.includes(arr[i]-1)){
        checkArr.push('true');
      } else{checkArr.push('false');}
    }if(checkArr.includes('false') || checkArr.length === 0){
      return false;
    }else return true;
}
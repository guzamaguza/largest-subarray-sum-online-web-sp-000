function largestSubarraySum(array){
let posArray = [];
let negArray = [];
let posSum = 0;
let negSum = 0;
//let sortedArray = array.sort().reverse();

  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      posArray.push(array[i]);
    }else if(array[i] < 0){
      negArray.push(array[i]);
    }
  }

  for(let j = 0; j<posArray.length; j++){
    posSum += posArray[j];
  }

  for(let k = 0; k<negArray.length; k++){
    negSum += negArray[k];
  }

if(negArray == null){
  return posSum;
}else if(posArray == null){
    biggestNeg = negArray[0];
    for(let q=1; q<negArray.length; q++){
      if(negArray[q] > biggestNeg){
        biggestNeg = negArray[q];
      }
    }
    return biggestNeg;
}else{
  return posSum;
}

}

function largestSubarraySum(array){

  let maxSum = 0;
  let tempSum = 0;

  for (let item of array) { // for each item of arr
    tempSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, tempSum); // remember the maximum
    if (tempSum < 0) tempSum = 0; // zero if negative
  }

  return maxSum;

/*
let posArray = [];
let negArray = [];
let posSum = 0;
let negSum = 0;
let biggestNeg;
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


//RETURN LOOPS
if(negArray.length === 0  && posArray.length != 0){
  return posSum;
}else if(negArray.length != 0 && posArray.length === 0){
    biggestNeg = negArray[0];
    for(let q=0; q<negArray.length; q++){
      if(negArray[q] > biggestNeg){
        biggestNeg = negArray[q];
      }
    }
    return biggestNeg;
}else{
    return posSum;
}
*/


}

function largestSubarraySum(array){
let positiveSum = 0;
let biggestNeg = -100;
let sortedArray = array.sort().reverse();

  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      positiveSum += array[i];
    }else if(array[i] < 0){
        if(array[i] > biggestNeg){
          biggestNeg = array[i];
        }
    }
  }

let mixedSum = positiveSum + biggestNeg;
return positiveSum;

}

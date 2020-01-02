function largestSubarraySum(array){
let positiveSum = 0;
let biggestNeg = 0;

  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      positiveSum += array[i];
    }
  }

  let j = 0;
  let array[j-1] = 0;
  for(j=0; j<array.lenth; j++){
    if(array[j] < 0){

        if(array[j] > array[j-1]){
          biggestNeg = array[j]
        }
    }
  }

  return positiveSum + biggestNeg;
}

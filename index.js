function largestSubarraySum(array){
let positiveSum = 0;
  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      positiveSum += array[i];
    }
  }
  return sum;
}

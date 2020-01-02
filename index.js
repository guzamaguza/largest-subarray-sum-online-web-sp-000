function largestSubarraySum(array){
let positiveSum = 0;
let negArray = [];

  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      positiveSum += array[i];
    }
  }

  for(let j=0; j<array.lenth; j++){
    if(array[j] < 0){
      negArray += array[j];
    }
  }


  
  return positiveSum + ;
}

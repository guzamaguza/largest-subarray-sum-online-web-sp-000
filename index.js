function largestSubarraySum(array){
let positiveSum = 0;
let biggestNeg = 0;

  for(let i=0; i<array.length; i++){
    if(array[i] > 0){
      positiveSum += array[i];
    }
  }


  //let j = 0;
  //let array[j-1] = 0;
  for(let j=0; j<array.lenth; j++){
    if(array[j] < 0){
        let biggestNeg = -1000;
        if(array[j] > biggestNeg){
          biggestNeg = array[j];
        }
    }

    if(biggesNeg == -1000){
      biggestNeg = 0;
    }
  }

let mixedSum = positiveSum + biggestNeg;
return mixedSum;

}

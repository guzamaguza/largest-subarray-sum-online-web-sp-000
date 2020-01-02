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
  for(let q=0; q<posArray.length; q++){
    return negArray; 
  }
}else{
  return posSum;
}

}

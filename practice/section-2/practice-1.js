'use strict';

function countSameElements(collection) {
  var result = [];

  var current = collection[0];
  var countTime = 0;
  for(var i = 0; i < collection.length ; i++){
    if(collection[i] != current){
      result.push({key:current, count:countTime});
      current = collection[i];
      countTime = 0;
    }
    countTime++;
  }
  result.push({key:current, count:countTime});

  return result;
}

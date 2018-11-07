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

function createUpdatedCollection(collectionA, objectB) {
  var result = countSameElements(collectionA)
  for(var i = 0; i< result.length; i++){
    for(var j =0; j<objectB.value.length; j++){
      if(result[i].key == objectB.value[j]){
        result[i].count-=parseInt((result[i].count/3));
      }
    }
  }
  return result;
}

'use strict';

function countSameElements(collection) {
  var result = [];

  var current = collection[0];
  var countTime = 0;
  for(var i = 0; i < collection.length ; i++){
    var element = collection[i].split("-");
    var keyName = element[0];

    if(keyName != current){
      result.push({key:current, count:countTime});
      current = keyName;
      countTime = 0;
    }
    if(!element[1]){
      countTime++
    }else{
      countTime+=parseInt(element[1]);
    }
  }
  result.push({key:current, count:countTime});

  return result;
}

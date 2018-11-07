'use strict';

function countSameElements(collection) {
  var result = [];

  var current = collection[0];
  var countTime = 0;
  for(var i = 0; i < collection.length ; i++){
    var element = collection[i].replace("]","")

    var formattedElement = element.split("-");
    if( formattedElement.length == 1){
        formattedElement = element.split(":");
    }
    if( formattedElement.length == 1){
        formattedElement = element.split("[");
     }
    var keyName = formattedElement[0];

    if(keyName != current){
      result.push({name:current, summary:countTime});
      current = keyName;
      countTime = 0;
    }
    if(!formattedElement[1]){
      countTime++
    }else{
      countTime+=parseInt(formattedElement[1]);
    }
  }
  result.push({name:current, summary:countTime});

  return result;
}

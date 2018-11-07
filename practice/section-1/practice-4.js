'use strict';

function collectSameElements(collectionA, objectB) {

  var collection = objectB["value"];
  var commonElements = [];
  for (var i = 0; i < collectionA.length; i++ ){
    if (collection.includes(collectionA[i].key)){
      commonElements.push(collectionA[i].key);
    }
  }
  return commonElements;
}

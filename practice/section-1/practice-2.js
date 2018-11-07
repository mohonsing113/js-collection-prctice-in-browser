'use strict';

function collectSameElements(collectionA, collectionB) {
  var subCollection = collectionB[0]
  var commonElements = [];
  for (var i = 0; i < collectionA.length; i++ ){
    if (subCollection.includes(collectionA[i])){
      commonElements.push(collectionA[i]);
    }
  }
  return commonElements;
}

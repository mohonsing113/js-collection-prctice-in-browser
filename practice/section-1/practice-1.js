'use strict';
//function collectSameElements(collectionA, collectionB) {
//  var commonElements = [];
//  for (var i = 0; i < collectionA.length; i++ ){
//    if (collectionB.includes(collectionA[i])){
//      commonElements.push(collectionA[i]);
//    }
//  }
//  return commonElements;
//}


function collectSameElements(collectionA, collectionB) {

  return collectionA.filter( a => collectionB.includes(a))
}

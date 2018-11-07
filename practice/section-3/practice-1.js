'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = collectionA.slice();
  for(var i = 0; i< result.length; i++){
    for(var j =0; j<objectB.value.length; j++){
      if(result[i].key == objectB.value[j]){
        result[i].count-=1;
      }
    }
  }
  return result;
}

// Utility functions
function getRanges(num){
  switch (num){
    case '10':
     return [0,10];
    case '20':
     return [11,20];
    case '30':
      return [21-30];
    case '40':
      return [31-40];
  }
}

function getValues(rangeArray,domArray){
  var newArray = [];
  for (var i = 0; i < domArray.length; i++) {
    if(domArray[i] >= rangeArray[0] && domArray[i] <= rangeArray[1] ){
      var jqObject = $('<li></li>').html(domArray[i])
      newArray.push(jqObject);
    }
  }
  return newArray;
}

// DOM Manipulation


/*
1. On button click, grab the value
2. Pass the value to a helper function to find values in arr that are in the range
3. Append values back to DOM
*/
$('button').on('click', function() {
  var domValues = [];
  $('#original-values > li').each(function(i, li){
    domValues.push($(li).text());
  })
  var upperLimit = $(this).attr('data-val');
  var range = getRanges(upperLimit);
  debugger;
  $('#filtered-values').append(getValues(range, domValues));
})

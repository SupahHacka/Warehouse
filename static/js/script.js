$(document).ready(function(){

});

/****
*
*Function requires an element(s)'s name to be identical to its ID
*Function checks if form is empty
*
****/
function checkEmpty(x){
  //Separate fields by &, field ex. formFieldName=Value&formFieldName=value
  var y = x.split('&');
  var handler = [];
  l = y.length;

  //Verify  each field if empty
  for(i = 0; i < l; i++){
    //split value by = , ex. formFieldName = value
    var z = y[i].split('=');

    //Iterate every instance of each field and check value if empty
    //if  empty .errorInput is assigned to field by id
    //if empty, false value is pushed to array handler to serve as flag
    if(z[1] === ''){
      $('#' + z[0]).addClass('errorInput');
      handler.push(false);
    }else{
      $('#' + z[0]).removeClass('errorInput');
    }
  }

  //if handler has at least one value, e.g. false, return false
  //if handler has no value return true
  if(handler[0] === false){
    return false;
  }else{
    return true
  }
}
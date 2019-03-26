$(document).ready(function(){

});

/****
**
**Function requires an element(s)'s name to be identical to its ID
**Function checks if form is empty
**
****/
function checkEmpty(x){
  var y = x.split('&');
  var handler = [];
  l = y.length;

  for(i = 0; i < l; i++){
    var z = y[i].split('=');

    if(z[1] === ''){
      $('#' + z[0]).addClass('errorInput');
      handler.push(false);
    }else{
      $('#' + z[0]).removeClass('errorInput');
    }
  }

  if(handler[0] === false){
    return false;
  }else{
    return true;
  }
}

/****
**
**Function requires index to be sent after the value
**Function checks if password matches
**
****/
function clarifyPass(pass,passIndex,clarPass,clarPassIndex){
  if(pass != clarPass){
    $('#'+passIndex).addClass('errorInput');
    $('#'+clarPassIndex).addClass('errorInput');
    return false;
  }else{
    $('.clarPassErr').text('');
    $('#'+passIndex).removeClass('errorInput');
    $('#'+clarPassIndex).removeClass('errorInput');
    return true;
  }
}

/****
**
**Function checks if email is valid
**
****/
function checkEmail(email,index){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    $('#'+index).removeClass('errorInput');
    return true;
  }else{
    $('#'+index).addClass('errorInput');
    return false;
  }
}
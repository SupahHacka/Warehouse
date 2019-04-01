var client_IP = ''
$(document).ready(function(){

});

/****
**
**Function sets clients' IP 
**
****/
function getIP(json) {
  client_IP = json.ip
}


/****
**
**Class used for validation of values in forms, etc..
**
****/
class validation{

  /****
  **
  **Function requires an element(s)'s name to be identical to its ID
  **Function checks if form is empty
  **
  ****/
  checkEmpty(x){
    var y = x.split('&');
    var handler = [];
    var l = y.length;

    for(let i = 0; i < l; i++){
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
  clarifyPass(pass,passIndex,clarPass,clarPassIndex){
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
  checkEmail(email,index){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      $('#'+index).removeClass('errorInput');
      return true;
    }else{
      $('#'+index).addClass('errorInput');
      return false;
    }
  }

}
$(document).ready(function(){

  var headers = ["Please search your project!","Just layout things you think is related to your project","Or hit Randomize if your up to it!"];
  var i = 0;
  var k = 0;
  var hand = true;

  headerTxt();

  function headerTxt(){
    var txt = headers[i];
    var length = txt.length;

    if(k <= length && hand === true){
      document.getElementById("header").innerHTML += txt.charAt(k);
      k++;
      if(k === length){
        setTimeout(headerTxt, 3000)
      }else{
        setTimeout(headerTxt, 50)
      }
    }else{
      hand = false;
      if(k > -1){
        var char = document.getElementById("header").innerHTML.slice(0 , -1);
        document.getElementById("header").innerHTML = char;
        k--;
        setTimeout(headerTxt, 75);
      }else{
        hand = true;
        i++;
        if(i === headers.length){
          i = 0;
        }
        setTimeout(headerTxt, 50)
      }
    }
  }
  
});

function login(){
    if($('#logUsername').val() != '' && $('#logPass').val() != ''){
      $.ajax({
        data : $('#logFrm').serialize(),
        type : 'POST',
        url : '/login',
        success : function(response){
          console.log(response);
        },
        error: function(error){
          console.log(error);
        }
      });
    }else{
      alert('Please fill up the form');
    }
    return false;
}
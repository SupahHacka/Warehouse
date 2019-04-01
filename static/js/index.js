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

let vd = new validation();

function login(){
  if(vd.checkEmpty($('#logFrm').serialize())){
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

function register(){

  $('#regFrmErr').text('');
  $('#regFrmErr').removeClass('successOutput');

  if(vd.checkEmpty($('#registerFrm').serialize())){

    if(vd.clarifyPass($('#regPassword').val(),'regPassword',$('#regPasswordClar').val(),'regPasswordClar')){

      if(vd.checkEmail($('#regEmail').val(),'regEmail')){

        $.ajax({
          data: $('#registerFrm').serialize(),
          type:'POST',
          url:'/register',
          success:function(data){

            if(data === true){

              $('#regFrmErr').addClass('successOutput');
              $('#regFrmErr').removeClass('frmErr');

              $('#regFrmErr').text('User Successfully Added!');
              $('#registerFrm').trigger("reset");
              setTimeout(function(){
                console.log('hahah');
                $('#regFrmErr').text('');
              },7000);

            }else if(data == 'Exists'){
              $('#regFrmErr').text('User Exists');
            }else{
              console.log(data);
            }

          },
          error: function(data){
            console.log(data);
          }
        });

      }else{
        $('#regFrmErr').text('Please input a valid email, ex. example@.domain');
      }
    }else{
      $('#regFrmErr').text('Please make sure the passwords match');  
    }
  }else{
    $('#regFrmErr').text('Please fill up the highlighted fields');
  }
  return false;
}
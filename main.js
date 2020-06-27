function submit_(){
  console.log('pressed!');
  console.log(document.getElementById('emai').value);
  console.log(document.getElementById('pass1').value)
  var pass1 = document.getElementById('pass1').value
  var pass2 = document.getElementById('pass2').value
  var email = document.getElementById('emai').value
  if (pass1.length >= 20){
    alert("Password should be less than 20 char")
    document.getElementById('pass1').value = ""
    document.getElementById('pass2').value = ""
  } 
  else if(pass1 != pass2){
    alert("Passwords do not match")
    document.getElementById('pass1').value = ""
    document.getElementById('pass2').value = ""
  }else{
    console.log(pass1, email)
  }
}

  
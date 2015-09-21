<!-- getClasses method made with help from www.tizag.com/javascriptT/javascript-string-split.php -->
function getClasses(elem){

  var string = ("" + elem.className).split(/[ ,]+/);
  for (var i=0; i<string.length; i++) {
    document.write("Array Element " +i+ " = [\"" +string[i] + "\"]<br />");
  }
  document.write("<p><a href='testGetAdd.html'>Please click here to go back to the main page</a></p>");
  return string;
}

<!-- addClass method made with help from developer.mozilla.org/en-US/docs/Web/API/Element -->
function addClass(elem, className){
  if(elem.hasAttribute("class")){
    elem.className += " "+className;
  } else {
    elem.setAttribute("class", className);
  }
  document.write("Here is the element: " + elem.className);
  document.write("<p><a href='testGetAdd.html'>Please click here to go back to the main page</a></p>");
}

<!-- validateForm() method made with help from www.youtube.com/watch?v=WCMEXmZDzxw -->
function validateForm() {

  var un = document.getElementById('username').value;
  if (un == "") {
    document.getElementById('username').style.backgroundColor="red";
    alert('Please Enter a Username');
    return false;
  }

  var em = document.getElementById('email').value;
  if (em == "") {
    document.getElementById('email').style.backgroundColor="red";
    alert('Please Enter an Email Address');
    return false;
  }

  var pass = document.getElementById('password').value;
  if (pass == "") {
    document.getElementById('password').style.backgroundColor="red";
    alert('Please Enter a Password');
    return false;
  }

  var con = document.getElementById('confirm').value;
  if (con == "") {
    document.getElementById('confirm').style.backgroundColor="red";
    alert('Please Confirm Your Password');
    return false;
  }

  if(pass != con){
    alert('Password and Confirm Password Values Must Match. Please re-enter these fields.');
    return false;
  }

}

var nameError = document.getElementById('name-error'); 
var emailError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error'); 
var ptrojectError = document.getElementById('name-error'); 
var messageError = document.getElementById('name-error');

function validateName(){
 var name = document.getElementById('contact-name').value;


if (name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
}
if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'write full name ';
    return false;  
}
nameError.innerHTML = 'ok ';
return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-name').value;

    if (phone.length == 0){
         phoneError.innerHTML =' phone number is required';
         return  false;
    }
    
    if (phone.length !== 10){
        phoneError.innerHTML =' phone number must be 10 digits';
        return  false;
    }
    
    if (phone.match(/^0-9{10}$/)){
        phoneError.innerHTML ='only digits please';
        return  false;
    }
 phoneError.innerHTML="ok"
 return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    
     if (email.length == 0){
 emailError.innerHTML = 'email is required'
   return false;
     }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailError.innerHTML = 'email is invalid'
      return false;
  }  
  emailError.innerHTML='ok'
  return true;
}
function validateProject(){

}
function validateMessage(){
    var message  = document.getElementById('contact-message').value;
      var required =30 ;
      var left  = required = message.length;

      if (left > 0) {
          messageError.innerHTML = left + 'more charactre is required';
           return false;
      }
      emailError.innerHTML = 'ok';
      return true;
    }
const form = document.querySelector('#form'),
      error = document.querySelector('.error');
form.onsubmit = ()=> {
    const Fname = document.querySelector('.name').value.trim(),
          email = document.querySelector('.email').value.trim(),
          subject = document.querySelector('.subject').value.trim(),
          message = document.querySelector('.message').value.trim();
        if(Fname.length == 0 || Fname.length < 3){
            error.innerHTML = 'Please Enter Your Name';
            return false;
        }else if(email.length == 0 ){
            error.innerHTML = 'Please Enter Your Emaill';
            return false;
        }else if (subject.length == 0 || subject.length < 3){
            error.innerHTML = 'Please Enter Subject';
            return false;
        }else if (message.length == 0 || message.length < 5){
            error.innerHTML = 'Please Enter message';
            return false;
        }
}
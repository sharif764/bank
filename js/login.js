document.getElementById('login-submit').addEventListener('click',function(){
    // userEmail 
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   //userPassword 
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   // check email and password and goto another page 
   if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
       console.log('valid user');
       window.location.href = 'banking.html';
   }
   else{
       alert('please enter a valid password and gmail id');
   }
})

document.getElementById('login-submit').addEventListener('click',function(){
    // userEmail 
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   //userPassword 
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
       console.log('valid user');
   }
})
// find the button

var button = document.querySelector('.btn');
var input_field = document.querySelector('.input'); 

var icon = document.querySelector('.error');
var error_message = document.querySelector('.error_message');
var success_message = document.querySelector('.success_message') ; 

console.log(error_message); 

 
// make a event-handler for the button 

button.addEventListener('click', () => {

    var input = document.querySelector('.email').value;
    
    // validate input if it is a valid email adress

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        input_field.style = 'border: 2px solid green';

        icon.style = 'visibility: hidden'; 
        error_message.style = 'display: none';
        success_message.style = 'display: block';   
    } else {
        input_field.style = 'border : 2px solid red';
        
        console.log("er gaat iets fout"); 
       
       icon.style = 'visibility: visible';
       error_message.style = 'display: block';
       success_message.style = 'display: none';   
    }
     
}); 



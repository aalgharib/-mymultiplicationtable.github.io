"use strict";
/*   Midterm Practice
      Author: 
      Date:   
 */

// write logic to focus on 11th input element in the form


// write logic to prefill form elements programmatically with the given data below
let data = {
   firstName: "Linda",
   lastName: "Smith",
   gender: "male",
   address1: "suite 123",
   address2: "33 Younge Street",
   province: "ON",
   city: "Toronto",
   postalCode: "H7H0I8",
   country: "Canada",
   tuition: "7000.30"
}

let form = document.getElementById('form');
console.log('form')

form.addEventListener('preview',function(event){
   event.preventDefault()

   let fullName = document.getElementById('fullName').value
   let gender = document.getElementById('gender').value
   let address1 = document.getElementById('address1').value
   let address2 = document.getElementById('address2').value
   let city = document.getElementById('city').value
   let province = document.getElementById('province').value
   let postalCode = document.getElementById('postalCode').value
   let country = document.getElementById('country').value
   let email = document.getElementById('email').value
   let tuition = document.getElementById('tuition').value
   let submit = document.getElementById('submit').value

   fullName.addEventListener['change',handleChange];
   fullName.addEventListener['input',handleInput];
   fullName.addEventListener['keypress', handleKey];
   fullName.addEventListener['keydown', handleKey];
   fullName.addEventListener['keyup', handleKey];
   fullName.addEventListener['focus', handleFocus];
   


})

function handleChange(event){
   console.log(event.type, event.target.id, event.target.value)
}

function handleInput(event){
   console.log(event.type, event.target.id, event.target.value)
}

function handleFocus(event){
   console.log(event.type, event.target.id, event.target.value)
}

function handleBlur(event){
   console.log(event.type, event.target.id, event.target.value)
}

function handleMouse(event){
   console.log(event.type, event.target.id, event.target.value)
}

function handleKey(event){
   console.log(event.type, event.target.id, event.target.value)
}


function handleSend(event){
   console.log(event.type, event.target.id, event.target.value)
}

/* write logic to listen for event from input fields (change/input) or submit button and 
populate the output section on the left of the screen.
suggestion: practice with all event types
*/


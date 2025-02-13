//app.use(express.static('public'));

           
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
event.preventDefault();

const formData = new FormData(event.target);
const formObject = {};


formData.forEach((value, key) => {
   formObject[key] = value;
});

console.log('Form Object:', formObject); 

fetch('/registration', {
   method: 'POST',
   headers: {
       'Content-Type': 'application/json'
   },
   body: JSON.stringify(formObject)
})
.then(response => response.json())
.then(data => {
   console.log('Success:', data);

   
   alert('Form is successfully submitted!');

   
   setTimeout(() => {
       window.location.href = '/registrationform2'; 
   }, 2000);
})
.catch((error) => {
   console.error('Error:', error);
});
});
});





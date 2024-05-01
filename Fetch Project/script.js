const url = 'https://jsonplaceholder.typicode.com/users';
const uinput = document.getElementById('boughttonne');

const inputbox = document.getElementById('uname')

inputbox.addEventListener('focusin', function(){
    document.getElementById('label').classList.add('entering');
})
inputbox.addEventListener('focusout', function(){
    if (inputbox.value === ''){
        document.getElementById('label').classList.remove('entering');
    }
})


uinput.addEventListener('click', function(event){
  event.preventDefault();


  const input = document.getElementById('uname').value;
  fetch(url)
    .then(response => response.json())
    .then(nice => {
      const found = nice.find(check => check.username === input);

      if(found){
        window.location.href = 'index2.html';
      }
      else{
        const errorMessage = document.getElementById('errormsg');
        errorMessage.innerHTML = "<i class='fas fa-exclamation-circle'></i> Invalid username. Please try again.";
        const inputBox = document.getElementById('uname');
        inputBox.style.borderColor = '#d00e17';
        inputBox.addEventListener('input', function(){
          inputBox.style.borderColor = '';
          errorMessage.innerHTML = ''; 
        });
      }
    })
})



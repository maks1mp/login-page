window.onload = function(){
  var sendForm = document.querySelector('#send-form'),
      btnText = document.querySelector('.btn-text'),
      spinner = document.querySelector('.spinner');
  
  sendForm.onclick = function(e){
    e.preventDefault();
    btnText.classList.add('hidden');
    sendForm.style.padding = '5px';
    spinner.classList.remove('hidden');
  };
};
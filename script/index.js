// toggling of the active button state
const nav = document.querySelector('nav')
const button = nav.getElementsByClassName("btn")

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", '');
    this.className += " active";
  });  
}




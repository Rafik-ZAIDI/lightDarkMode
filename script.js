const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//select dark or light images
function imageMode(color){
  image1.src = `img/undraw_Login_re_4vu2_${color}.svg`;
  image2.src = `img/undraw_Work_time_re_hdyv_${color}.svg`;
  image3.src = `img/undraw_Scrum_board_re_wk7v_${color}.svg`;
}
//Dark mode style
function darkMode(){
  nav.style.background = 'rgba(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)';
  //console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = 'Dark Mode';
 // toggleIcon.children[1].classList.remove('fa-sun');
 //toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

//Light mode style
function lightMode(){
  nav.style.background = 'rgba(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  //console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = 'Light Mode';
  // toggleIcon.children[1].classList.remove('fa-moon');
  // toggleIcon.children[1].classList.add('fa-sun');
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

//Switch theme dynamically
function switchTheme(event){
   if (event.target.checked){
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('theme', 'dark');
     darkMode();
    } else {
     document.documentElement.setAttribute('data-theme', 'light');     
     localStorage.setItem('theme', 'light');
     lightMode();
    }
}

//Event listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
  document.documentElement.setAttribute('data-theme', currentTheme);
 
  if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    darkMode();
  }
}
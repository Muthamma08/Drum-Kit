//a function to play aound when clicked
var buttonList = document.querySelectorAll('.drum');
for (let i = 0; i < buttonList.length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    buttonAnimation(this.innerHTML);
    switch (this.innerHTML) {
      case 'w':
        var crash = new Audio('sounds/crash.mp3');
        crash.loop = false;
        crash.play();
        break;
      case 'a':
        var kick_bass = new Audio('sounds/kick-bass.mp3');
        kick_bass.loop = false;
        kick_bass.play();
        break;
      case 's':
        var snare = new Audio('sounds/snare.mp3');
        snare.loop = false;
        snare.play();
        break;
      case 'd':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.loop = false;
        tom1.play();
        break;
      case 'j':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.loop = false;
        tom2.play();
        break;
      case 'k':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.loop = false;
        tom3.play();
        break;
      case 'l':
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.loop = false;
        tom4.play();
        break;

      default:
        alert('the sound cannot be played');
        break;
    }
  });
}

//a function to play aound when a key is pressed
document.addEventListener('keydown', function (event) {
  buttonAnimation(event.key);
  switch (event.key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.loop = false;
      crash.play();
      break;
    case 'a':
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.loop = false;
      kick_bass.play();
      break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.loop = false;
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.loop = false;
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.loop = false;
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.loop = false;
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.loop = false;
      tom4.play();
      break;
    default:
      alert('press the right key');
      break;
  }
});

//animating button on click or whenever a key is pressed
function buttonAnimation(currentkey) {
  var a = document.querySelector('.' + currentkey);
  a.classList.add('pressed');
  setTimeout(function () {
    a.classList.remove('pressed');
  }, 500);
}

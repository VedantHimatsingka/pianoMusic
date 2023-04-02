var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "s":
      var sa1 = new Audio("sounds/1sa.mp3");
      sa1.play();
      break;

    case "r":
      var re1 = new Audio("sounds/2re.mp3");
      re1.play();
      break;

    case "g":
      var ga1 = new Audio('sounds/3ga.mp3');
      ga1.play();
      break;

    case "m":
      var ma1 = new Audio('sounds/4ma.mp3');
      ma1.play();
      break;

    case "p":
      var pa1 = new Audio('sounds/5pa.mp3');
      pa1.play();
      break;

    case "d":
      var da1 = new Audio('sounds/6da.mp3');
      da1.play();
      break;

    case "n":
      var ni1 = new Audio('sounds/7ni.mp3');
      ni1.play();
      break;

    case "a":
      var x1 = new Audio('sounds/8saa.mp3');
      x1.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
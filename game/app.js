var forward = 0;
function abc() {
  console.log(event.keyCode);
  var character = document.getElementById("character");
  if (event.keyCode === 68 && forward < 1000) {
    forward = forward + 10;
    character.style.left = forward + 'px';
    character.src = "imgame/gohan-run.gif";
    setTimeout(function () {
      character.src = "imgame/gohan-main.gif";
      character.style.width = '150px';
      character.style.height = '150px';
    }, 1500);
  }
  if (event.keyCode === 65 && forward > 0) {
    forward = forward - 10;
    character.style.left = forward + 'px';
    character.src = "imgame/gohan-run.gif";
    setTimeout(function () {
      character.src = "imgame/gohan-main.gif";
      character.style.width = '150px';
      character.style.height = '150px';
    }, 2000);
  }
  if (event.keyCode === 32) {
    character.src = "imgame/gohan-power.gif";
    character.style.width = '600px';
    character.style.height = '200px';
    setTimeout(function () {
      character.src = "imgame/gohan-main.gif";
      character.style.width = '150px';
      character.style.height = '150px';
    }, 2200);
  }
}
window.onkeydown = abc;

var currentPosition = 0;
var character2 = document.getElementById("character2");

function moveleft() {
  currentPosition += 10;
  character2.style.right = currentPosition + "px";
}
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37 && currentPosition < 1000) {
    character2.src = "imgame/teddie-strut.gif";
    moveleft();
  } setTimeout(function () {
    character2.src = "imgame/teddie-wave.gif";
    character2.style.width = '150px';
    character2.style.height = '150px';
  }, 2000);
  if (event.keyCode === 39 && currentPosition > 0) {
    currentPosition = currentPosition - 10;
    character2.style.right = currentPosition + 'px';
    character2.src = "imgame/teddie-persona4-arena-walkbackwards.gif";
    setTimeout(function () {
      character2.src = "imgame/teddie-wave.gif";
      character2.style.width = '200px';
      character2.style.height = '200px';
    }, 3000);
  }
  if (event.keyCode === 38) {
    character2.src = "imgame/teddie-spinnin.gif";
    character2.style.width = '200px';
    character2.style.height = '200px';
    setTimeout(function () {
      character2.src = "imgame/teddie-wave.gif";
      character2.style.width = '150px';
      character2.style.height = '150px';
    }, 2000);
  }
  if (event.keyCode === 40) {
    character2.src = "imgame/teddie-surprise.gif";
    character2.style.width = '200px';
    character2.style.height = '200px';
    setTimeout(function () {
      character2.src = "imgame/teddie-wave.gif";
      character2.style.width = '150px';
      character2.style.height = '150px';
    }, 2000);
  }
}
);

const mario = document.getElementById("mario");
const goomba = document.getElementById("goomba");

function jump() {

  if (mario.classList != "jump") {

    mario.classList.add("jump");

    setTimeout(function () { mario.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(function () {

  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  let goombaLeft = parseInt(window.getComputedStyle(goomba).getPropertyValue("left"));

  if (goombaLeft < 50 && goombaLeft > 0 && marioTop >= 140) {

    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {

    jump();
  
});

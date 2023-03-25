const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let death = false;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePostion = pipe.offsetLeft;
  const marioPostion = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePostion <= 120 && pipePostion > 0 && marioPostion < 80) {
    pipe.style.animation = "none";
    mario.style.animation = "none";

    pipe.style.left = `${pipePostion}px`;

    mario.style.bottom = `${marioPostion}px`;

    const audio = new Audio("../audios/morreu.ogg");
    audio.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

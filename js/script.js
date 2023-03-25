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

    mario.src = "../images/morreu.png";
    pipe.style.left = `${pipePostion}px`;

    mario.style.bottom = `${marioPostion}px`;

    const audio = new Audio("https://github.com/imGui33/bigodeAdventure/blob/main/audios/morreu.ogg");
    audio.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

// adiciona evento de toque para dispositivos móveis
document.addEventListener("touchstart", jump);

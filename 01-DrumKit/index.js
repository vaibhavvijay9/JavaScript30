function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // if other key pressed then just return 
    audio.currentTime = 0; //rewind to the start (if not writtten then on pressing single key multiple times we get sound after completing previous tone fully.)
    audio.play();
    key.classList.add("playing");
    // key.addClass("playing");   -- in jQuery
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); // get all key elements
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
const panels = document.querySelectorAll(".panel");

function togglePanel() {
    this.classList.toggle("open"); // toggles class open
}

function toggleWords(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) { // flex OR flex-grow
        this.classList.toggle("open-active"); // toggles class open-active
    }
}

panels.forEach(panel => panel.addEventListener("click", togglePanel)); // toggles i.e opens and closes OR adds and removes
panels.forEach(panel => panel.addEventListener("transitionend", toggleWords));
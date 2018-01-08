const inputs = document.querySelectorAll(".controls input");

//user defined function
function updateValue() {
    const unit = this.dataset.sizing || ""; //dataset contains all the "data-" attributes for that specific element
    // unit = px or ""
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}
inputs.forEach(input => input.addEventListener("change", updateValue));
inputs.forEach(input => input.addEventListener("mousemove", updateValue));
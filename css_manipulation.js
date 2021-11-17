let red1 = document.getElementById("red_value")
let green1 = document.getElementById("green_value")
let blue1 = document.getElementById("blue_value")
let width = document.getElementById("width")
let red2 = document.getElementById("red_value_bg")
let green2 = document.getElementById("green_value_bg")
let blue2 = document.getElementById("blue_value_bg")
let text = document.getElementById("text")

function changeColor() {
    text.style.borderColor = red1.value + green1.value + blue1.value
    text.style.backgroundColor = red2.value + green2.value + blue2.value
    text.style.width = width.value
}

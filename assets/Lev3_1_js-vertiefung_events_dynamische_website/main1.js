let pink = document.querySelector('button:nth-of-type(1)')
let purple = document.querySelector('button:nth-of-type(2)')
let orange = document.querySelector('button:nth-of-type(3)')

let range1 = document.querySelectorAll('input[type="range"]');
console.log(range1);

let colorCount = 0;

const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
    //document.getElementById("demo").innerHTML = "You choose " + color + " . You changed the color " + colorCount + " times.";
    document.getElementById("demo").innerHTML = `You choose ${color}. You changed the color ${colorCount} times.`
}

const changeHandle = () => {
    let red = document.getElementById("rot").value;
    let green = document.getElementById("grun").value;
    let blue = document.getElementById("blau").value;
    // let rgbValue = "rgb(" + red + ", " + green + ", " + blue + ")";
    let rgbValue = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = rgbValue;
    colorCount++;
    document.getElementById("demo").innerHTML = "You picked " + rgbValue + ". You changed the color " + colorCount + " times.";
}

pink.addEventListener("click", () => {
    changeBackground("pink");
});
purple.addEventListener("click", () => {
    changeBackground("purple");
});
orange.addEventListener("click", () => {
    changeBackground("orange");
});

range1.forEach((range) => {
    range.addEventListener("change", () => {
        changeHandle();
    });
});

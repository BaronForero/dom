console.log("works");

const exampleBtn = document.getElementsByClassName('example')
console.log(exampleBtn);

function myFunction() {
    for (i = 0; i < exampleBtn.length; i++) {
        exampleBtn[i].style.backgroundColor = "black"
        exampleBtn[4].style.color = "white"
    }
}






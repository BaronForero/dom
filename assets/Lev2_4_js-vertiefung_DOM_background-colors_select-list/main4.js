
const button = document.querySelector('#button');

const farbeAuswahlen = document.querySelector('#farbeAuswahlen')

button[0].addEventListener("click", (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = selectElement.value.replace(" ", "")
})
console.log("works");
// event.target.value
// addEventListener("change", (event) => {...} )
// innerHTML oder textContent

const mySelect = document.getElementById('my-select')
const optionSelected = document.getElementById('option-selected')

mySelect.addEventListener("change", (event) => {
    optionSelected.textContent = `Sie haben Ausgewählt ${event.target.value}`
})


let colorChange = () => {
    //Home
    const firstP = document.getElementsByTagName('p')[0]
    firstP.style.backgroundColor = "#f6c89f"
    //News
    const secondP = document.getElementsByTagName('p')[1]
    secondP.style.backgroundColor = "#ffe7d1"
    //Contact
    const thirdP = document.getElementsByTagName('p')[2]
    console.log(thirdP);
    thirdP.style.backgroundColor = "#4b8e8d"
    //change me
    const fourthP = document.getElementsByTagName('p')[3]
    console.log(fourthP);
    fourthP.style.backgroundColor = "#396362"
}


const restart = () => {
    location.reload();
}
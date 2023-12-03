const btnE1 = document.getElementById("btn")

const birthdayE1 = document.getElementById("birthday")

function calculateage(){
    const birthdayValue = birthdayE1.value;
    console.log(birthdayValue)
}


btnE1.addEventListener("click", calculateage)


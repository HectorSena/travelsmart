let hora = prompt("Ingrese la hora")

if (hora >= 6 && hora <= 12) {
    document.write("<h1>¡Buenos dias! 😊</h1>")
}
else if (hora >=13 && hora <=18) {
    document.write("<h1> ¡Buenas tardes! 🙌</h1>")
}
else if(hora >=18 && hora <=24) {
    document.write("<h1>¡Buenas noches! 😴")
}
else if (hora >= 1 && hora <= 6) {
    document.write("<h1>¡Estas no son horas para sacar un presupuesto hijo! 😡")
}






let vacationCalc = document.getElementById("vacationCalc")
    vacationCalc.addEventListener("submit", calcExpenses)
    
function calcExpenses(e) {
    e.preventDefault()

    let destino = document.getElementById("destino").value,
        presupuesto = document.getElementById("presupuesto").value,
        hotel = document.getElementById("hotel").value,
        transporte = document.getElementById("transporte").value,
        comida = document.getElementById("comida").value

    
let expenses = parseInt(hotel) + parseInt(transporte) + parseInt(comida)
let balance = presupuesto - expenses

    console.log(destino, presupuesto, balance)
    UI(destino, presupuesto, balance)

}

function UI(destino, presupuesto, balance) {
    let result = document.getElementById("result")
    let dataPrint = document.createElement("div")

    dataPrint.innerHTML = `
        <div div class="container-data row" >
        <div class"col s4">
            <h6>${destino}</h6>
        </div>

        <div class"col s4">
            <h6>${presupuesto}</h6>
        </div>

        <div class"col s4">
            <h6>${balance}</h6>
        </div>

`
    result.appendChild(dataPrint)
    reset()

}
function reset() {
    document.getElementById("vacationCalc").reset()
}


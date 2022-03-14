/* Actividad 1 

pregunta los días de la semana, los coloca en una lista y te la devuelve alreves */
function diasSemana(){
    var dias = []
    for (let i = 1; i <= 7; i++) {
        var dia = prompt("Dime los dias de la semana")
        dias.unshift(dia)
    }

    dias.forEach(dia => alert(`Dia ${dia}`))
}


/* Actividad 2

Calcula de euro a dolares
Calcular de dolares a euros
*/

function euroDolar(){
    var dinero = prompt("¿Què cantidad quieres convertir en dolares a euros?")
    var conversion = dinero * 1.2

    document.write(`${conversion} €`)
}

function dolarEuro(){
    var dinero = prompt("¿Què cantidad quieres convertir en euros a dolares?")
    var conversion = dinero * 0.89

    document.write(`${conversion} dorales`)
}

/* Actividad 3

Cambiar una clase por otro nombre

*/

function cambioClase(){
    document.getElementById("section").className = "format"
}

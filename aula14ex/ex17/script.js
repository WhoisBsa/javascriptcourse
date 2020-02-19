function generateTable() {
    //Declare Variables
    var number = document.querySelector('input#number')
    var table  = document.querySelector('textarea#table')
    table.innerHTML = ''

    if(number.value.length == 0)
        alert("Type a number")
    else {
        var n = Number(number.value)

        //Start Loop
        for(var i = 0; i <= 10; i++)
            table.innerHTML += `${n} * ${i} = ${n * i}\n`
    }

}
function generateTable() {
    //Declare Variables
    var number = document.querySelector('input#number')
    var table  = document.querySelector('textarea#table')
    table.innerHTML = ''

    //Start Loop
    for(var i = 0; i <= 10; i++){
        table.innerHTML += `${number.value} * ${i} = ${Number(number.value) * i}\n`
    }

}
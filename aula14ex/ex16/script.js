function loopFunction() {
    //Declare Variables
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var result = document.getElementById('res')
    result.innerText = ''

    //Conditions
    if (Number(start.value) > Number(end.value) && Number(step.value) > 0) {
        alert('The start must be less than the end if you want a crescent loop')
    } else if (Number(start.value) < Number(end.value) && Number(step.value) < 0) {
        alert('The start must be bigger than the end if you want a decrescent loop')
    } else if (!start.value || !end.value || !step.value) {
        alert('[ERR] fill in all the fields')
    } else {
        if (Number(step.value) > 0){
            //Start Loop
            for(var c = Number(start.value); c <= Number(end.value); c += Number(step.value)) {
                result.innerText += ` ${c}`
            }
        } else {
            //Start Loop            
            for(var c = Number(start.value); c >= Number(end.value); c += Number(step.value)) {
                result.innerText += ` ${c}`
            }
        }
    }
}    
function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var f_year = document.getElementById('age')
    var res = document.getElementById('res')

    if (f_year.value.length == 0 || Number(f_year.value) > year) {
        alert('[ERR] Check the data and try again')
    } else {
        var f_sex = document.getElementsByName('sex')
        var age = year - Number(f_year.value)
        var gender = ''
        var img = document.createElement('img')

        // Include CSS
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '20%'
        img.style.width = '50%'
        img.style.paddingTop = '10px'

        if (f_sex[0].checked) {
            gender = 'Man'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'img/criancaM.jpg')
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'img/jovemM.jpg')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'img/adultoM.jpg')
            } else {
                // Old
                img.setAttribute('src', 'img/idosoM.jpg')
            }
        } else if (f_sex[1].checked) {
            gender = 'Woman'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'img/criancaF.jpg')
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'img/jovemF.jpg')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'img/adultoF.jpg')
            } else {
                // Old
                img.setAttribute('src', 'img/idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `It's a ${gender} with ${age} years old <br>`
        res.appendChild(img)
    }
}
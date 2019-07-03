function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `It's now ${hour} hours`

    // Verify hour = correctly image
    if (hour >= 0 && hour < 12) {
        // Good Morning
        img.src = "img/manha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hour >= 12 && hour < 18) {
        // Good Afternoon
        img.src = "img/tarde.png"
        document.body.style.background = "#b9846f"
    } else {
        // Good Night
        img.src = "img/noite.png"
        document.body.style.background = "#515154"
    }
} 
date.getHours()
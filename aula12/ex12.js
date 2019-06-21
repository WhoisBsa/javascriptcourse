var now = new Date()
var hour = now.getHours()

console.log(`Now is ${hour} hours`)

if (hour < 12) {
    console.log('Good Morning')
} else if (hour <= 18) {
    console.log('Good Afternoom')
} else {
    console.log('Good Night')
}
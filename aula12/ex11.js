var age = 19
console.log(`You have ${age} years old`)

if (age < 16) {
    console.log('Cant vote')
} else if (age < 18 || age > 65){
        console.log('Opitional Vote')
} else {
    console.log('Obrigatory Vote')
}
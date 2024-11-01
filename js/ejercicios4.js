// KARLA JAQUELINE MUÑOZ TREJO - TI31 - EJERCICIOS 4

// 1.
let userAge = prompt('Enter your age: ')
let ageLeft = 18 - userAge
switch (true) {
    case userAge >= 18:
        console.log('You are old enough to drive.')
        break;
    case userAge < 18:
        console.log('You are left with', + ageLeft + ' years to drive.')
        break;
}

// 2.
let myAge = 19
let yourAge = prompt('Enter your age: ')
let old = yourAge - myAge
let young = myAge - yourAge
if (yourAge > myAge) {
    console.log('You are ' + old + ' year/s older than me.')
} else {
    console.log('You are ' + young + ' year/s younger than me.')
}

// 3.
let a = prompt('Enter number for a: ')
let b = prompt('Enter number for b: ')
let verdad = a > b

if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(b + ' is greater than ' + a)
}

verdad = true
    ? console.log(a + ' is greater than ' + b)
    : console.log(b + ' is greater than ' + a)

// 4.
let monthUserInput = prompt('Please submit what month is it: ')
let month = monthUserInput.toLowerCase()

switch (month) {
    case 'september':
        console.log('The season is Autumn')
        break;
    case 'october':
        console.log('The season is Autumn')
        break;
    case 'november':
        console.log('The season is Autumn')
        break;

    case 'december':
        console.log('The season is Winter.')
        break;
    case 'january':
        console.log('The season is Winter.')
        break;
    case 'february':
        console.log('The season is Winter.')
        break;

    case 'march':
        console.log('The season is Spring')
        break;
    case 'april':
        console.log('The season is Spring')
        break;
    case 'may':
        console.log('The season is Spring')
        break;

    case 'june':
        console.log('The season is Summer.')
        break;
    case 'july':
        console.log('The season is Summer.')
        break;
    case 'august':
        console.log('The season is Summer.')
        break;
    default:
        console.log('It is not a month.')
}

// 5.
let points = prompt('Write your points: ')

if (points >= 80 && points <= 100) {
    console.log('You had a grade of: A')
} else if (points >= 70 && points <= 79){
    console.log('You had a grade of: B')
} else if (points >= 60 && points <= 69) {
    console.log('You had a grade of: C')
} else if (points >= 50 && points <= 59) {
    console.log('You had a grade of: D')
} else if (points >= 0 && points <= 49) {
    console.log('You had a grade of: F')
}

// KARLA JAQUELINE MUÑOZ TREJO - TI31 - EJERCICIOS 4
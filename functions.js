// -----------day7 fonksiyonlar functions

function sayHello() {
    console.log('hello')
}

sayHello() // hello
// fonksiyonlar geriye değer dönddürür

function math(num1, num2) {
    return num1 * num2
}

let total = math(5, 2)

console.log('çarpım =', total)



function topla() { // fonksiyon
    let total = 0
    for (let i = 0; i < arguments.length; i++) { // nesnedeki toplam öğe sayısını verir
        total += arguments[i]
    }
    return total
}

console.log(topla(2, 5, 7, 9, 10)) // 33


// yeni 

function topla(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log(topla(2, 5, 7, 9, 10))



function çarp(...nums) {
    return nums.reduce((total, num) => total * num);
}
console.log(çarp(2, 5, 6, 3))



const anonim = function(name) {
    return `Hello ${name}`
}
console.log(anonim('HALE')) // hello HALE




;(function() {
    console.log('heyyoo!!')
}) ()

// Arrow Function ok fonksiyonu
const holla = best => `hello ${best}`

console.log(holla('Yareeen'))



const bestFriend = (name, surname) => `hello ${name} ${surname}`

console.log(bestFriend('Boklu', 'Haruuuun'))

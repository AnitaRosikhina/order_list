//Завдання 1
function summer() {
    let counter = 0
    return function (n) {
        counter += n
        return counter
    }
}

let sum = summer()
console.log(sum(2));
console.log(sum(10))
console.log(sum(3))
//Завдання 2

import * as shop from './shop.js'
const BALANCE = document.getElementById('balance')
const BEER_COUNT = document.getElementById('beer')
const PEPSI_COUNT = document.getElementById('pepsi')
const WINE_COUNT = document.getElementById('wine')
const ADD = document.getElementById('add')
const COUNT = document.getElementById('count')
const BASKET = document.getElementById('basket')
const BUY = document.getElementById('buy')
const CHECK = document.querySelector('.check')
const MODAL = document.querySelector('.modal')
const MESSAGE = document.querySelector('.message')
const CLOSE = document.querySelector('.close')
const CLOSE_BTN = document.getElementById('close')

function render() {
    BALANCE.value = shop.getBalance()
    BEER_COUNT.value = shop.getCountBeer()
    PEPSI_COUNT.value = shop.getCountPepsi()
    WINE_COUNT.value = shop.getCountWine()
}
render()

ADD.addEventListener('click', function() {
    const nameOfItem = document.querySelector('input[name="drink"]:checked').value
    if (nameOfItem === 'beer' && shop.beerCount < COUNT.value) {
        MODAL.style.display = 'block'
        MESSAGE.textContent = `На складі пива ${shop.beerCount} штук`
        COUNT.value = ''
    }
    else  if (nameOfItem === 'pepsi' && shop.pepsiCount < COUNT.value) {
        MODAL.style.display = 'block'
        MESSAGE.textContent = `На складі пепсі ${shop.pepsiCount} штук`
        COUNT.value = ''
    }
    else if (nameOfItem === 'wine' && shop.wineCount < COUNT.value) {
        MODAL.style.display = 'block'
        MESSAGE.textContent = `На складі вина ${shop.wineCount} штук`
        COUNT.value = ''
    }
    else {
        if(!COUNT.value) {
            MODAL.style.display = 'block'
            MESSAGE.textContent = 'Напишіть кількість товару!'
        } else if (COUNT.value <= 0) {
            MODAL.style.display = 'block'
            MESSAGE.textContent = 'Значення має бути додатне!'
            COUNT.value = ''
        } else {
            shop.items.push({name: nameOfItem, count: COUNT.value})
            COUNT.value = ''
            BASKET.value = ''
            shop.items.forEach(el => {
                BASKET.value += `${el.name}: ${el.count} pieces  \n`
            })
        }
    }
})

BUY.addEventListener('click', function() {
    let beerCount = 0
    let wineCount = 0
    let pepsiCount = 0
    shop.items.forEach(el => {
        beerCount += el.name === 'beer' && +el.count
        wineCount += el.name === 'wine' && +el.count
        pepsiCount += el.name === 'pepsi' && +el.count
    })
    if (beerCount > shop.beerCount || wineCount > shop.wineCount || pepsiCount > shop.pepsiCount) {
        MODAL.style.display = 'block'
        MESSAGE.textContent = 'На складі недостаньо товару!'
    } else if(!BASKET.value) {
        MODAL.style.display = 'block'
        MESSAGE.textContent = 'Ви не обрали товар!'
    } else {
        CHECK.innerHTML = ''
        shop.items.forEach(el => {
            CHECK.innerHTML += `<p>${el.name}: ${el.count}</p>`
        })
        BASKET.value = ''
        shop.sell()
        render()
    }
})

function close () {
    MODAL.style.display = 'none'
}

CLOSE.addEventListener('click', () => {
    close()
})
CLOSE_BTN.addEventListener('click', () => {
    close()
})








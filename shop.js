let balance = 1000
let beerCount = 100
let pepsiCount = 80
let wineCount = 50
let beerPrice = 40
let winePrice = 90
let pepsiPrice = 20
let items = []


function sell() {
    const result = items.reduce((acc, next) => {
        let price;
        if (next.name === 'beer') {
            price = beerPrice
            beerCount -= next.count
        } else if (next.name === 'wine') {
            price = winePrice
            wineCount -= next.count
        } else {
            price = pepsiPrice
            pepsiCount -= next.count
        }
        balance += acc + (next.count * price)
        return acc + (next.count * price)
    }, 0)
    items = []
    console.log(result)
    document.querySelector('.check_price').textContent = ` Всього: ${result} грн`
}

function getBalance() {
    return `${balance} грн`
}

function getCountBeer() {
    return `${beerCount} шт.`
}

function getCountWine() {
    return `${wineCount} шт.`
}

function getCountPepsi() {
    return `${pepsiCount} шт.`
}

export {getBalance, getCountBeer, getCountWine, getCountPepsi, sell, items, beerCount, pepsiCount, wineCount}
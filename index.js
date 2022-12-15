// Code your solutions in this file

const names = ["Charlie", "Samip", "Ali"];
const event = ["Birthday"]

function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

function countDown(down){
    while (down >= 0) {
        console.log(down--)
    }
    return down
}



const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = '';
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 60);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6 ) + 1
        alert('You rolled a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 5) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins.');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
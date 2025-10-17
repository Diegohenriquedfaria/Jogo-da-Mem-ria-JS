function urlBuilder(number){}

let card = new CardManager(urlBuilder);
let board = newBoardManager("board" , 50 , card);
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

for (let i = 4; i <= 10; i+=2){

    let quantiaCartas  = i*i;
    let opção = document.createElement('option');

    opção.value = quantiaCartas;
    opção.innerHTML = quantiaCartas;

    select.appendChild(opção);

}

start.addEventListener('click', () => {
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
    board.fill(select.value);

}  );

//comando do desenvolvedor
start.click();


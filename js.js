function up(){
    let element = document.getElementById('img');
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function down(){
    let element = document.getElementById('img');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function left(){
    let element = document.getElementById('img');
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function right(){
    let element = document.getElementById('img');
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function keyboard(kb){
    switch (kb.keyCode){
        case 38:
            up();
            break;
        case 40:
            down();
            break;
        case 37:
            left();
            break;
        case 39:
            right();
            break;
    }
}
function ready(){
window.addEventListener('keydown', keyboard);
}
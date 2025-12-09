const display = document.getElementById('display');
const history = document.getElementById('history');
let current = '';

document.querySelectorAll('.num').forEach(b => b.onclick = () => {
    current += b.textContent;
    display.textContent = current;
});

document.querySelectorAll('.op').forEach(b => b.onclick = () => {
    current += ` ${b.textContent} `;
    display.textContent = current;
});

document.getElementById('clear').onclick = () => {
    current = '';
    display.textContent = '';
};

document.getElementById('equals').onclick = () => {
    try {
        const result = eval(current);
        history.innerHTML += `<div>${current} = ${result}</div>`;
        current = String(result);
        display.textContent = current;
    } catch (e) {
        display.textContent = 'Erro';
    }
};
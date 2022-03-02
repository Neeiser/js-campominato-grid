let boxContainer = document.querySelector('.box-container');

for (i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('boxes');
    element.innerHTML = i;
    boxContainer.append(element);
}
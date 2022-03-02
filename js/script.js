
/*
-----------
Get Element // Queryes
-----------
*/

// Header Get Element

const modeSelecter = document.getElementById('difficulty-selecter');
const hardModeSelected = document.getElementById('hard-mode');
const normalModeSelected = document.getElementById('normal-mode');
const easyModeSelected = document.getElementById('easy-mode');
const playButton = document.getElementById('play-btn');

// Main Queryes

const boxContainer = document.querySelector('.box-container');




/*
-----------
Event
-----------
*/

playButton.addEventListener('click', function(){

    if (modeSelecter.value == 'hard'){
        for (i = 1; i <= 100; i++) {
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i; /* debugger */
            boxContainer.append(element);
        }
    } else if (modeSelecter.value == 'normal'){
        for (i = 1; i <= 81; i++) {
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i; /* debugger */
            boxContainer.append(element);
        }
    } else {
        for (i = 1; i <= 49; i++) {
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i; /* debugger */
            boxContainer.append(element);
        }
    }
});
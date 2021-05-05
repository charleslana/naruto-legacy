import { recreateNode } from '../../functions/functions.js';

export const showSound = () => {
    const buttonSound = document.querySelector('#test1 > button');

    if (buttonSound) {
        const sound = localStorage.getItem('sound');

        if (sound) {
            buttonSound.textContent = 'Desabilitar sons do jogo';
            enableSound();
            return;
        }
    
        buttonSound.textContent = 'Habilitar sons do jogo';
        enableSound(true);
    }
}

const enableSound = (enable = false) => {
    const buttonSound = document.querySelector('#test1 > button');
    if (enable) {
        return buttonSound.addEventListener('click', () => {
            localStorage.setItem('sound', true);
            recreateNode(buttonSound);
            showSound();
        });
    }
    buttonSound.addEventListener('click', () => {
        localStorage.removeItem('sound');
        recreateNode(buttonSound);
        showSound();
    });
}
function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground');
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    setInnerTextById('current-alphabet', alphabet);
    addBackgroundColorById(alphabet);
}

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    const expectedAlphabet = getAlphabetElementValueById('current-alphabet');
    
    if(playerPressed === expectedAlphabet){
        const currentGameScore = getTextElementById('game-score');
        const updatedGameScore = currentGameScore + 1;
        setTextElementById('game-score', updatedGameScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else{
        const currentLifeScore  = getTextElementById('life-score');
        const updatedLifeScore = currentLifeScore - 1;
        setTextElementById('life-score', updatedLifeScore);
        if(updatedLifeScore === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function gameOver(){
    hideElementById('home-screen');
    hideElementById('playground');
    showElementById('final-score');
    const lastScore = getTextElementById('game-score');
    setTextElementById('updated-final-score', lastScore);
}
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

    // ekta alphabet genarate
    
    // alphabet set 
    // key highlight hobe

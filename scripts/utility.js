// step - 1 (hide homepage && final score)
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// step - 2 (show game screen)
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// step - 3.1 (generate a random alphabet)
function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnofqrstuvwxyz";
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(alphabet);
    return alphabet;
}

// step - 3.2 (set the randomly generated alphabet to the play screen)
function setInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// step - 3.3 (highlight the key display alphabet)
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

const dynamicText = document.querySelector('h1 span');
console.log(dynamicText)
const words = ['font-end developer' , 'back-end developer' , 'full-Stack-Developer' , 'founder in codex miraj']

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let latterIndex = 0;
let isDeleting = false;



const typeEffect = () => {
    const currentword = words[wordIndex];
    const currentLatter = currentword.substring(0, latterIndex);
    dynamicText.textContent = currentLatter;
    dynamicText.classList.add('stop-blinking');

    if(!isDeleting && latterIndex < currentword.length){
        latterIndex++;
        setTimeout(typeEffect,200);
    }else if(isDeleting && latterIndex > 0){
        latterIndex--;
        setTimeout(typeEffect,100);
    } 
    else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

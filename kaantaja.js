"use strict"

var input = require('readline-sync');

// Funktio joka kääntää sanan, tarkistaa onko se palindromi ja palauttaa boolean arvon sen perusteella.
const isPalindrome = (word) => {
    let reversedWord = '';
    // Huom! Array on esitelty let eikä const, koska tehtävänanto kielsi valmiiden fuktioiden käydön. Näin ollen voin muokata taulukon alkioita suoraan.
    let reversedWordCharArray = [];

    for (let i = word.length - 1, j = 0; i >= 0; i--, j++){
        reversedWordCharArray[j] = word[i];
    }

    reversedWord = reversedWordCharArray.join('');

    return reversedWord === word;
};

var word = input.question('Anna sana: ');

var result = isPalindrome(word.toLowerCase());

var resultMessage = result ? 'Sana on palindromi' : 'Sana ei ole palindromi';

console.log(resultMessage);
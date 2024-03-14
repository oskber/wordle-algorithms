/*
Inputs: Två ord (två textsträngar)
    Ett ord som är gissningen
    Ett ord som är det korrekta ordet

Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var

Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut: 
    letter (bokstaven)
    result (ett av följande värden)
    ‘incorrect’: Finns inte med i det andra ordet
    ‘misplaced’: Finns med i det andra ordet, men på annan plats
    ‘correct’: Korrekt plats i det andra ordet 


Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:

H / incorrect
A / misplaced
L / incorrect (eftersom det redan finns ett korrekt L)
L / correct
Å / incorrect
*/

export default function wordle(selectedWord, guessedWord) {
  let selected = selectedWord.toUpperCase().split('');
  let guessed = guessedWord.toUpperCase().split('');
  let result = [];
  let duplicateCounter = 0;

  for (let i = 0; i < guessed.length; i++) {
    if (guessed[i].match(/[0-9]/)) {
      return 'incorrect, enter letters only';
    }
    if (selected[i] === guessed[i]) {
      result.push({ letter: guessed[i], result: 'correct' });
    } else if (selected.includes(guessed[i])) {
      if (
        guessed.filter((char) => char === guessed[i]).length >
        selected.filter((char) => char === guessed[i]).length + duplicateCounter
      ) {
        duplicateCounter++;
        result.push({ letter: guessed[i], result: 'incorrect' });
      } else {
        result.push({ letter: guessed[i], result: 'misplaced' });
      }
    } else {
      result.push({ letter: guessed[i], result: 'incorrect' });
    }
  }
  return result;
}

export default function feedback(selectedWord, guessedWord) {
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

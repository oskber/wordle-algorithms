export default function selectWord(wordList, length, uniqueLetters) {
  let result = [];

  if (typeof wordList === 'string') {
    wordList = wordList.split(' ');
  }

  if (length) {
    wordList = wordList.filter((word) => word.length === length);
  } else {
    return 'No word found with that length';
  }

  if (uniqueLetters) {
    wordList = wordList.filter((word) => new Set(word).size === word.length);
    result = wordList;
  } else {
    result = wordList;
  }

  if (result.length === 0) {
    return [];
  }

  let randomWord = Math.floor(Math.random() * result.length);

  return result[randomWord];
}

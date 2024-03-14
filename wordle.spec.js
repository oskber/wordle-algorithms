import { describe, expect, it } from '@jest/globals';

import wordle from './wordle';

describe('wordle()', () => {
  //Checks if the function takes two arguments
  it('takes two arguments', () => {
    const testFunc = () => {
      wordle('arg1', 'arg2');
    };
    expect(testFunc).not.toThrow();
  });
  //Checks if the function returns an empty array when the guessed word is empty
  it('returns an empty array when the guessed word is empty', () => {
    const output = wordle('CYKLA', '');
    expect(output).toEqual([]);
  });
  //Checks if users input is valid, i.e not a number
  it('returns incorrect if user inputs a number', () => {
    const output = wordle('TEST', '123');
    expect(output).toBe('incorrect, enter letters only');
  });
  //Checks if array returns correct results for each letter in the guessed word,
  //Checks if multiple letters of the same kind are handled correctly
  it('controls if letters from guessedWord exists in selectedWord', () => {
    const output = wordle('CYKLA', 'HALLÅ');
    expect(output).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'A', result: 'misplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'Å', result: 'incorrect' },
    ]);
  });
});

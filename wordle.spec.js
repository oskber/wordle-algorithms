import { describe, expect, it } from '@jest/globals';

import wordle from './wordle';

describe('wordle()', () => {
  it('takes two arguments', () => {
    const testFunc = () => {
      wordle('arg1', 'arg2');
    };
    expect(testFunc).not.toThrow();
  });

  it('returns an empty array when the guessed word is empty', () => {
    const output = wordle('CYKLA', '');
    expect(output).toEqual([]);
  });

  it('returns incorrect if user inputs a number', () => {
    const output = wordle('TEST', '123');
    expect(output).toBe('incorrect, enter letters only');
  });

  it('control if letters from guessedWord exists in selectedWord and where', () => {
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

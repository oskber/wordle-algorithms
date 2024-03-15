import { describe, expect, it } from '@jest/globals';

import selectWord from './words';

describe('selectWord()', () => {
  //Checks if the function takes three arguments
  it('should take three arguments', () => {
    const testFunc = () => {
      selectWord('arg1', 5, true);
    };
    expect(testFunc).not.toThrow();
  });
  //Checks if the function filters the word list by the length parameter
  it('should filter words by the length parameter', () => {
    const wordList = ['cat', 'coyote', 'horse', 'shark'];
    let length = 3;
    let uniqueLetters = true;
    const output = selectWord(wordList, length, uniqueLetters);
    expect(output).toEqual('cat');
  });
  //Checks if the function filters the word list by the uniqueLetters parameter
  //If "true" - letters has to be unique
  it('should filter words by the uniqueLetters parameter "true"', () => {
    const wordList = ['test', 'cat', 'horse'];
    let length = 3;
    let uniqueLetters = true;
    const output = selectWord(wordList, length, uniqueLetters);
    expect(output).toEqual('cat');
  });
  //Checks if the function filters the word list by the uniqueLetters parameter
  //if "false" - letters can be repeated
  it('should filter words by the uniqueLetters parameter "false"', () => {
    const wordList = ['test', 'cat', 'horse'];
    let length = 4;
    let uniqueLetters = false;
    const output = selectWord(wordList, length, uniqueLetters);
    expect(output).toEqual('test');
  });
  //Checks that length parameter is not 0
  it('should validate correct length input', () => {
    const wordList = ['test', 'cat', 'horse'];
    let length = 0;
    let uniqueLetters = false;
    const output = selectWord(wordList, length, uniqueLetters);
    expect(output).toBe('No word found with that length');
  });
  //Checks if the function returns one randomized word
  //Checks lengthparameter 3, 4 and 5
  it.each([3, 4, 5])('should return one randomized word', (lengthParams) => {
    const wordList = ['cat', 'dog', 'duck', 'deer', 'horse', 'whale'];
    let length = lengthParams;
    let uniqueLetters = false;
    const outputs = new Set();

    // Run the function 100 times and store the outputs in a Set. The Set removes any duplicates and stores only unique values.
    for (let i = 0; i < 100; i++) {
      const output = selectWord(wordList, length, uniqueLetters);
      outputs.add(output);
    }

    // Checks that the Set contains more than one unique value, i.e not the same word every time
    expect(outputs.size).toBeGreaterThan(1);

    // Checks that all outputs are in the wordList
    outputs.forEach((output) => {
      expect(wordList).toContain(output);
    });
  });
});

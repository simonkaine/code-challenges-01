import { fiveAndGreaterOnly } from './lab02Challenge01';
import { evensOnly } from './lab02Challenge01';
import { fiveCharactersOrFewerOnly } from './lab02Challenge01';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('Evens only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('five chars or fewer only', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
    const output = fiveCharactersOrFewerOnly(input); // act
    expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
});
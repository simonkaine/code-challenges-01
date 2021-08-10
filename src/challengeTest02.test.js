import { stringItUp } from './challenge02';

test('Take an array of numbers and make them strings', () => {
  const input = [2, 5, 100]; // arrange
  const output = stringItUp(input); // act
  expect(output).toEqual(["2", "5", "100"]); // assert
});
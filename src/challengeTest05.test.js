import { makeStrings } from './challenge05';

test('Take an array of numbers and make them strings', () => {
  const input = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; // arrange
  const output = makeStrings(input); // act
  expect(output).toEqual([
    "Angelina Jolie can go to The Matrix", 
    "Eric Jones is under age!!", 
    "Paris Hilton is under age!!", 
    "Kayne West is under age!!", 
    "Bob Ziroll can go to The Matrix"
]); // assert
});
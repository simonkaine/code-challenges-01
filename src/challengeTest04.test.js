import { namesOnly } from './challenge04';

test('Names Only', () => {
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
  const output = namesOnly(input); // act
  expect(output).toEqual([
    "Angelina Jolie", 
    "Eric Jones", 
    "Paris Hilton", 
    "Kayne West", 
    "Bob Ziroll"
]); // assert
});
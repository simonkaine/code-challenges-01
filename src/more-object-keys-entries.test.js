import { getHouses, totalCharacters, updateNumbers } from './more-object-keys-entries.js';

test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']); //assert
});

test('Update Numbers', () => {
  const characters = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'}; //arrange
  const output = updateNumbers(characters); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
});

test('House Size', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange; //arrange
  const output = totalCharacters(characters); //act
  expect(output).toEqual(26); //assert
});

// test('Has Children Entries', () => {
//   const characters = [
//     {
//       name: 'Eddard',
//       spouse: 'Catelyn',
//       children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//       house: 'Stark'
//     },
//     {
//       name: 'Jon A.',
//       spouse: 'Lysa',
//       children: ['Robin'],
//       house: 'Arryn'
//     },
//     {
//       name: 'Cersei',
//       spouse: 'Robert',
//       children: ['Joffrey', 'Myrcella', 'Tommen'],
//       house: 'Lannister'
//     },
//     {
//       name: 'Daenarys',
//       spouse: 'Khal Drogo',
//       children: ['Drogon', 'Rhaegal', 'Viserion'],
//       house: 'Targaryen'
//     },
//     {
//       name: 'Mace',
//       spouse: 'Alerie',
//       children: ['Margaery', 'Loras'],
//       house: 'Tyrell'
//     },
//     {
//       name: 'Euron',
//       spouse: null,
//       children: [],
//       house: 'Greyjoy'
//     },
//     {
//       name: 'Jon S.',
//       spouse: null,
//       children: [],
//       house: 'Snow'
//     }
//   ]; //arrange; //arrange
//   const character1 = "Eddard"; //act
//   const output1 = hasChildrenEntries(characters, character1); //act
//   expect(output1).toEqual(true); //assert

//   const character2 = "Euron"; //act
//   const output2 = hasChildrenEntries(characters, character2); //act
//   expect(output2).toEqual(false); //assert
// });


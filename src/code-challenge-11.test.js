import { returnTen, findMax, totalSum } from './codeChallenge11';

  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

  test('Find max number', () => {
    expect(findMax([[13,24,24,2], [2,5,6], [2,3]])).toEqual(24);
  });

  test('Find the Total Sum', () => {
    expect(totalSum([[13,24,24,2], [2,5,6], [2,3]])).toEqual(81);
    expect(totalSum([])).toEqual(0);
  });

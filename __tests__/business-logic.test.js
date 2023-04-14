import { Age } from '../src/js/business-logic.js';

describe ('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27);
  });

  test('should create a new age object using the user input of earth years', () => {
    expect(age.earth).toEqual(27);
  });

  test('return a users earth year age in mercury years', () => {
    let ageTest1 = new Age(27);
    ageTest1.calculateMercury();
    expect(age.earth).toEqual(112.5);
  });
});
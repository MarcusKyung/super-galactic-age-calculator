import { Age } from '../src/js/business-logic.js';

describe ('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27);
  });

  test('should create a new age object using the user input of earth years', () => {
    expect(age.userAge).toEqual(27);
  });

  test('return a users earth year age in mercury years', () => {
    age.calculateMercury();
    expect(age.mercury).toEqual(112.5);
  });

  test('return a users earth year age in venus years', () => {
    age.calculateVenus();
    expect(age.venus).toEqual(43.5483871);
  });
});
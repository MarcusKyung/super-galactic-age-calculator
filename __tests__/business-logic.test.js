import { Age } from '../src/js/business-logic.js';

describe ('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27, 17, 37);
  });

  test('should create new age object with user age in earth years, a past birthday in earth years, and a future birthday in earth years', () => {
    expect(age.userAge).toEqual(27);
    expect(age.userAgePast).toEqual(17);
    expect(age.userAgeFuture).toEqual(37);
  });

  test('should return a users earth year age in mercury years', () => {
    age.calculateMercury();
    expect(age.mercury).toEqual(112.5);
  });

  test('should return a users earth year age in venus years', () => {
    age.calculateVenus();
    expect(age.venus).toEqual(43.55);
  });

  test('should return a users earth year age in mars years', () => {
    age.calculateMars();
    expect(age.mars).toEqual(14.36);
  });

  test('should return a users earth year age in jupiter years', () => {
    age.calculateJupiter();
    expect(age.jupiter).toEqual(2.28);
  });

  test('should return the years since a past birthday on earth', () => {
  const yearsSinceBirthday = age.calculateYearsSince();
  expect(yearsSinceBirthday).toEqual(10);
});
});
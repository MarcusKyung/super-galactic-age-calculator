import { Age } from '../src/js/business-logic.js';

describe ('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27, 17, 47);
  });

  test('should create new age object with user age in earth years, a past birthday in earth years, and a future birthday in earth years', () => {
    expect(age.userAge).toEqual(27);
    expect(age.userAgePast).toEqual(17);
    expect(age.userAgeFuture).toEqual(47);
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

  // test('should return the years since a past birthday on earth', () => {
  // const yearsSinceBirthday = age.calculateYearsSince();
  // expect(yearsSinceBirthday).toEqual(10);
  // });

  test('should return years since a past birthday on each planet', () => {
    const yearsSinceBirthday = age.calculateYearsSince();
    expect(yearsSinceBirthday).toEqual(["10 Earth years have passed", "41.67 Mercury years have passed", "16.13 Venus years have passed", "5.32 Mars years have passed", "0.84 Jupiter years have passed"]);
  });

  test('should return an error when the userAge < userAgePast', () => {
    let errorAge = new Age(17, 27, 37)
    const yearsSinceBirthday = errorAge.calculateYearsSince();
    expect(yearsSinceBirthday).toBe("Please enter a birthday in the past");
  });

  test('should return years until a future birthday on each planet', () => {
    const yearsUntilBirthday = age.calculateYearsUntil();
    expect(yearsUntilBirthday).toEqual(["20 Earth years have yet to pass", "83.33 Mercury years have yet to pass", "32.26 Venus years have yet to pass", "10.64 Mars years have yet to pass", "1.69 Jupiter years have yet to pass"]);
  });

  test('should return an error when the userAge < userAgeFuture', () => {
    let errorAge = new Age(27, 17, 17)
    const yearsUntilBirthday = errorAge.calculateYearsSince();
    expect(yearsUntilBirthday).toBe("Please enter a birthday in the past");
  });
});
describe ('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(27);
  });

  test('should create a new age object using the user input of earth years', () => {
    expect(age.earth).toEqual(27);
  });

});
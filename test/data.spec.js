import { sortData } from '../src/data.js';
describe('sortData', () => {
  let uno = [
    {name: "Abra", num: "063"}, {name: "Zubat",num: "041" }, {name: "Zapdos",num: "145"},{name: "Bulbasaur", num: "001" }
  ];
  test('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  test('returns the firts pokemon Abra', () => {
    expect((sortData(uno,"name","a-z"))[0].name).toBe('Abra');
  });
  test('returns the pokemon Zubat', () => {
  expect((sortData(uno,"name","z-a"))[0].name).toBe('Zubat');
});
  test('returns the pokemon Bulbasaur', () => {
  expect((sortData(uno,"num","a-z"))[0].name).toBe('Bulbasaur');
});
test('returns the pokemon Zapdos', () => {
  expect((sortData(uno,"num","z-a"))[0].name).toBe('Zapdos');
});
});
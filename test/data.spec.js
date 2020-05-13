import { sortData,  filterData, filterDataDebilidades } from '../src/data.js';
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
describe('filterData', () => {
  let dos = [
    {name: "Abra", num: "063", type: "Psychic"}, 
    {name: "Wigglytuff",num: "040", type: "Normal"}, 
    {name: "Zapdos",num: "145", type: "Electric"},
    {name: "Bulbasaur", num: "001",type: "Grass"}
  ];
  test('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  test('returns  pokemon Abra a type Psychic', () => {
    expect((filterData(dos,"Psychic"))[0].name).toBe('Abra');
  });
  test('returns  pokemon Bulbasaur a type Grass', () => {
    expect((filterData(dos,"Grass"))[0].name).toBe('Bulbasaur');
  });
});
describe('filterDataDebilidades', () => {
  let tres = [
    {name: "Abra", num: "063", type: "Psychic", weaknesses:"Bug"},
    {name: "Wigglytuff",num: "040", type: "Normal" , weaknesses:"Fighting"},
    {name: "Zapdos",num: "145", type: "Electric" , weaknesses:"Ice"},
    {name: "Bulbasaur", num: "001",type: "Grass", weaknesses:"Fire"}
  ];
  test('is a function', () => {
    expect(typeof filterDataDebilidades).toBe('function');
  });
  test('returns  pokemon Zapdos  A weaknesses ice', () => {
    expect((filterDataDebilidades(tres,"Ice"))[2].name).toBe('Zapdos');
  });
});
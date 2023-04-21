const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test('mult two numbers', ()=> {
    expect( sum.mult(2,3)  ).toBe(6);
});
test('say Hi',()=>{
    expect (sum.hola()).toBe("Buenos Dias!");
})

test('is major than?',()=>{
    expect (sum.majorthan(5,1)).toBe(true);
})
test('is minor than',()=>{
    expect (sum.minorthan(43,109)).toBe(true);
})
var expect = require ('chai').expect

describe('Main', () => {
  var arr;

  // Roda uma vez antes do bloco
  before(() => {
  });

  // Roda uma vez depois do bloco
  after(() => {
  });

  // Roda todas as vezes antes de um bloco
  beforeEach(() => {
  arr =  [1,2,3];
  });

  // Roda todas as vezes depois de um bloco
  afterEach(() => {
  });

  it('should be an array', () => {
    expect(arr).to.be.a('array')
  })

  it('should have a size of 4 when push another value to the array', ()=>{
    arr.push(4);
    expect(arr).to.have.lengthOf(4)
  });

  it('should have a size of 2 when pop a value from the array', ()=>{
    arr.pop(4);
    expect(arr).to.have.lengthOf(2)
  });

  it('should remove 3 when use pop in the array', ()=>{
    arr.pop();
    expect(arr).to.not.include(3)
  });
});

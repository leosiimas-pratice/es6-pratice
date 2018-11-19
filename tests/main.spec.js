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
  var arr =  [1,2,3];
  });

  // Roda todas as vezes depois de um bloco
  afterEach(() => {
  });

  it('should have a size of 4 when push another value to the array', ()=>{
    arr.push(4);
    console.log(arr.length);
  });

  it('should have a size of 2 when pop a value from the array', ()=>{
    arr.pop(4);
    console.log(arr.length);
  });

  it('should remove 3 when use pop in the array', ()=>{
    console.log(arr.pop() === 3);
  });
});

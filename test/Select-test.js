describe('Select', () => {
  const SelectInjector = require('inject!../src/Select');
  let mock, Select;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => Select = SelectInjector({
    mock
  }));


  it('should be ok', () => {
    expect(Select).toBeTruthy();
  });
});

const instances = require('./modules/handleToDo');


describe('ToDo methods', () => {

    test('Add item', () => {
      expect(instances.stringLength("qwerty")).toBe("This is working");
    });
  
    test('remove item', () => {
      expect(instances.reverseString("test")).toBe("tset");
    });
  });

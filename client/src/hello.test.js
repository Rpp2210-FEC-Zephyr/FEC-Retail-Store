const hello = require('./helloSpec.js');


test('should return "hello"', () => {
    expect(hello("Hel", "lo")).toBe("Hello");    
});
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office", ()=> {
    const testValue = 100;
    const e = new Manager("Yeet", 1, "test@gmail.com", testValue);
    expect(e.office).toBe(testValue);
});

test("Can grab office from function", ()=> {
    const testValue = 100;
    const e = new Manager("Yeet", 1, "test@gmail.com", testValue);
    expect(e.getOffice).toBe(testValue);
});
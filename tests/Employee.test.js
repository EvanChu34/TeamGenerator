const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("Can set name from constructor arguments", () => {
    const name = "Evan";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", ()=> {
    const testValue = 100;
    const e = new Employee("Yeet", testValue);
    expect(e.id).toBe(testValue)
});

test("Can set email via constructor argument", ()=> {
    const testValue = "test@gmail.com";
    const e = new Employee("Yeet", 1 , testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name from function", ()=> {
    const testValue = "Yeet";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
    
});

test("Can get id from function", ()=> {
    const testValue = 100 ;
    const e = new Employee("Yeet", testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get email from function", ()=> {
    const testValue = "test@gmail.com";
    const e = new Employee("Yeet", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});

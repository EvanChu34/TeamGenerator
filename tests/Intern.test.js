const Intern = require("../lib/Intern");

test("Can set School", ()=> {
    const testValue = "Columbia";
    const e = new Intern("Ahh", 1, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Return title", ()=> {
    const testValue = "Engineer";
    const e = new Intern("Yeet", 1, "test@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get School from function", ()=> {
    const testValue = "Columbia";
    const e = new Intern("Ahh", 1, "test@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue)
});
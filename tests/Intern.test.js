const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("Can set School", ()=> {
    const testValue = "Columbia";
    const e = new Intern("Yeet", 1, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Can get School from function", ()=> {
    const testValue = "Columbia";
    const e = new Intern("Yeet", 1, "test@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue)
});

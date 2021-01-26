const Engineer = require("../lib/Engineer");

test("Can get GitHub from constructor", ()=> {
    const testValue = "GitHubUser";
    const e = new Engineer("Yeet", 1, "test@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Return title", ()=> {
    const testValue = "Engineer";
    const e = new Engineer("Yeet", 1, "test@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Get get GitHub username from GitHub", ()=> {
    const testValue = "GitHubUser";
    const e = new Engineer("Yeet", 1, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
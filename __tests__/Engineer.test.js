const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('Engineer should have name, id, email, and a github', () => {
  const engineer = new Engineer('Udvig');
  expect(engineer).toHaveProperty('name');
  expect(engineer).toHaveProperty('id');
  expect(engineer).toHaveProperty('email');
  expect(engineer).toHaveProperty('github');
})

test('looks for GitHub username property using getGithub() function', () => {
  const engineer = new Engineer('Udvig', 2, 'udvig@email.com', 'github');
  expect(engineer.getGithub()).toEqual(expect.any(String));  
})

test('looks for role using getRole()', () => {
  const engineer = new Engineer('Udvig', 2, 'udvig@email.com', 'githubUsername');
  expect(engineer.getRole()).toBe('Engineer');  
});
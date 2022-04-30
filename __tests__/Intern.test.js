const Intern = require('../lib/Intern.js');

test('Intern should have name, id, email, and school', () => {
  const intern = new Intern('Addington');
  expect(intern).toHaveProperty('name');
  expect(intern).toHaveProperty('id');
  expect(intern).toHaveProperty('email');
  expect(intern).toHaveProperty('school');
});
  
test('looks for school using getSchool()', () => {
  const intern = new Intern('Addington', 1, 'addingtion@email.com', 'schoolName');
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test('looks for role using getRole()', () => {
  const intern = new Intern('Addington', 1, 'addington@email.com', 'schoolName');
  expect(intern.getRole()).toBe('Intern');  
});
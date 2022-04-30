
const Manager = require('../lib/Manager.js');

test('Manager should have name, id, email, and office number', () => {
  const manager = new Manager('Higa');
  expect(manager).toHaveProperty('name');
  expect(manager).toHaveProperty('id');
  expect(manager).toHaveProperty('email');
  expect(manager).toHaveProperty('officeNumber');
});

test('looks for role using getRole()', () => {
  const manager = new Manager('Higa', 1, 'higa@email.com', 'officeNumber');
  expect(manager.getRole()).toBe('Manager');  
});
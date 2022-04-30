const Employee = require('../lib/Employee.js');

test('checks for employee objects', () => {
  const employee = new Employee('Wilder');
  expect(employee).toHaveProperty('name');
  expect(employee).toHaveProperty('id');
  expect(employee).toHaveProperty('email');
});

test('looks for name using getName()', () => {
  const employee = new Employee('Wilder');
  expect(employee.getName()).toEqual('Wilder');
});

test('looks for id using getId()', () => {
  const employee = new Employee('Wilder', 1);
  expect(employee.getId()).toBe(1);
});

test('looks for email using getEmail()', () => {
  const employee = new Employee('Wilder', 1, 'wilder@email.com');
  expect(employee.getEmail()).toBe('wilder@email.com');
  const emailPattern = expect.stringMatching(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/); 
  expect(employee.getEmail()).toEqual(emailPattern);
});

test('looks for role using getRole()', () => {
  const employee = new Employee('Wilder', 1, 'wilder@email.com');
  expect(employee.getRole()).toBe('Employee');  
});
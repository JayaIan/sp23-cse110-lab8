// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Testing isPhoneNumber
test('tests if 2023 is phone number', () => {
    expect(functions.isPhoneNumber(2023)).toBe(false);
});

test('tests if 1234567890 is phone number', () => {
    expect(functions.isPhoneNumber(1234567890)).toBe(false);
});

test('tests if (123) 456-7890 is phone number', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('tests if 123-456-7890 is phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

// Testing isEmail
test('tests if apple@apple.apple is an email', () => {
    expect(functions.isEmail("apple@apple.apple")).toBe(false);
});

test('tests if rich!#@poor.com is an email', () => {
    expect(functions.isEmail("rich!#@poor.com")).toBe(false);
});

test('tests if prof@ucsd.com is an email', () => {
    expect(functions.isEmail("prof@ucsd.com")).toBe(true);
});

test('tests if student-01@ucsd.com is an email', () => {
    expect(functions.isEmail("prof@ucsd.com")).toBe(true);
});

// Testing isStrongPassword
test('tests if 123_password_123 is an strong password', () => {
    expect(functions.isStrongPassword("123_password_123")).toBe(false);
});

test('tests if password123! is an strong password', () => {
    expect(functions.isStrongPassword("password123!")).toBe(false);
});

test('tests if password123 is an strong password', () => {
    expect(functions.isStrongPassword("password123")).toBe(true);
});

test('tests if Password_123 is an strong password', () => {
    expect(functions.isStrongPassword("Password_123")).toBe(true);
});


// Testing isDate
test('tests if 28052023 is a date', () => {
    expect(functions.isDate("28052023")).toBe(false);
});

test('tests if 28-052-023 is a date', () => {
    expect(functions.isDate("28-052-023")).toBe(false);
});

test('tests if 28/05/2023 is a date', () => {
    expect(functions.isDate("28/05/2023")).toBe(true);
});

test('tests if 28/5/2023 is a date', () => {
    expect(functions.isDate("28/5/2023")).toBe(true);
});

// Testing isHexColor
test('tests if #aabb112 is a hex color', () => {
    expect(functions.isHexColor("#aabb112")).toBe(false);
});

test('tests if ghi123 is a hex color', () => {
    expect(functions.isHexColor("ghi123")).toBe(false);
});

test('tests if 123456 is a hex color', () => {
    expect(functions.isHexColor("123456")).toBe(true);
});

test('tests if #ab2 is a hex color', () => {
    expect(functions.isHexColor("#ab2")).toBe(true);
});
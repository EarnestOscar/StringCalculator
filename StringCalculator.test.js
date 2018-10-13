const add = require("./StringCalculator");

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("Should return the sum of the numbers that are in the string", () => {
    expect(add("5,3")).toBe(8);
});

it("Should return the sum of the numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

it("Should return 3 but throw the negative -4", () => {
    expect(() => add("3,-4")).toThrowError('Negatives not allowed: -4');
});

it("Should return the sum of only positive numbers and throw an error for -4 and -5", () => {
    expect(() => add("2,-4,3,-5")).toThrowError('Negatives not allowed: -4,-5');
});

it("Should return 2 and ignore any number over 1000", () => {
    expect(add("2,1001")).toBe(2);
});
const fizz_buzz = require("../src/index");

test("Returns 'FizzBuzz' for multiples of 3 and 5", () => {
  expect(fizz_buzz(15)).toEqual(["FizzBuzz"]);
});

test("Returns 'Fizz' for multiples of 3", () => {
  expect(fizz_buzz(3)).toEqual(["Fizz"]);
});

test("Returns 'Buzz' for multiples of 5", () => {
  expect(fizz_buzz(5)).toEqual(["Buzz"]);
});

test("Returns a positive integer", () => {
  const result = fizz_buzz(7);
  const value = result[0];

  expect(typeof value).toBe("number");
  expect(Number.isInteger(value)).toBe(true);
  expect(value).toBeGreaterThan(0);
});

test("Result is not null", () => {
  const result = fizz_buzz(7);
  expect(result).not.toBeNull();
});

test("Result array contains only one value", () => {
  const result = fizz_buzz(7);
  expect(result.length).toBe(1);
});

const fizz_buzz = (number) => {
  const fizz_buzz_array = [];
  if (number % 3 === 0 && number % 5 === 0) {
    fizz_buzz_array.push("FizzBuzz");
  } else if (number % 3 === 0) {
    fizz_buzz_array.push("Fizz");
  } else if (number % 5 === 0) {
    fizz_buzz_array.push("Buzz");
  } else {
    fizz_buzz_array.push(number);
  }
  return fizz_buzz_array;
};

module.exports = fizz_buzz;

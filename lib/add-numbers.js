function addNumbers (...numbers) {
  return numbers.reduce((sum, n) => {
    return sum + n;
  }, 0);
}

module.exports = addNumbers;

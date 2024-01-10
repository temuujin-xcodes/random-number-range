/**
 * Generates a random integer within a specified range.
 *
 * @param {Object} options - The options object.
 * @param {number} [options.min=0] - The minimum value of the range (inclusive).
 * @param {number} [options.max=9] - The maximum value of the range (inclusive).
 * @returns {number} - A random integer within the specified range.
 *
 * @example
 * const result = randomNumberRange(); // Generates a random number between 0 and 9 (inclusive).
 * const customResult = randomNumberRange({ min: 5, max: 15 }); // Generates a random number between 5 and 15 (inclusive).
 */
function randomNumberRange({
  min = 0,
  max = 9,
} = {}) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = randomNumberRange;

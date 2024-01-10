# Random Number Range

A simple JavaScript module to generate a random integer within a specified range.

## Installation

```bash
npm install random-number-range
```

## Usage
```js
const randomNumberRange = require('random-number-range');

// Generates a random number between 0 and 9 (inclusive).
const result = randomNumberRange();

// Generates a random number between 5 and 15 (inclusive).
const customResult = randomNumberRange({ min: 5, max: 15 });
```

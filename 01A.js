
// copy and paste this in the browser console at https://adventofcode.com/2021/day/1/input to get the solution

// parse input, remove extra line and transform to numbers
const list = $('pre')
  .textContent.split('\n')
  .slice(0, -1)
  .map(Number);


list.reduce(
  (acc, x) => ({ incr: acc.prevX < x ? acc.incr + 1 : acc.incr, prevX: x }),
  { incr: 0, prevX: Infinity },
).incr;

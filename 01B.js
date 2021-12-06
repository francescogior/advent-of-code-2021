
// copy and paste this in the browser console at https://adventofcode.com/2021/day/1/input to get the solution

// parse input, remove extra line and transform to numbers
const list = $('pre')
  .textContent.split('\n')
  .slice(0, -1)
  .map(Number);



list.reduce(
  (acc, _, i, l) =>
    i + 2 >= l.length
      ? acc
      : {
          incr:
            acc.prevSum < l[i] + l[i + 1] + l[i + 2] ? acc.incr + 1 : acc.incr,
          prevSum: l[i] + l[i + 1] + l[i + 2],
        },
  { incr: 0, prevSum: Infinity },
).incr;

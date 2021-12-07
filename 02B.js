
// copy and paste this in the browser console at https://adventofcode.com/2021/day/2/input to get the solution


list = $('pre')
  .textContent.split('\n')
  .slice(0, -1)
  .map(row => row.split(' '))
  .map(rowA => [rowA[0], Number(rowA[1])]);

list
  .reduce(
    (acc, x) => {
      if (x[0] === 'forward')
        return [acc[0] + x[1], acc[1] + x[1] * acc[2], acc[2]];
      if (x[0] === 'down') return [acc[0], acc[1], acc[2] + x[1]];
      if (x[0] === 'up') return [acc[0], acc[1], acc[2] - x[1]];
    },
    [0, 0, 0],
  )
  .slice(0, 2)
  .reduce((a, b) => a * b);

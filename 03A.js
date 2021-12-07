
// copy and paste this in the browser console at https://adventofcode.com/2021/day/3/input to get the solution

list = $('pre')
  .textContent.split('\n')
  .slice(0, -1)
  .map(s => s.split('').map(d => (d === '1' ? 1 : -1)));

sumV = (v1, v2) => v1.map((x, i) => x + v2[i]);

listSum = list.reduce(sumV);

parseInt(listSum.map(x => (x > 0 ? 1 : 0)).join(''), 2) *
  parseInt(listSum.map(x => (x > 0 ? 0 : 1)).join(''), 2);

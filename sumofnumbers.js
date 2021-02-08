const array = [1, 2, 3, 4];

function sumFor(lists) {
  let sum = 0;
  for (const list of lists) {
    sum += list;
  }
  return sum;
}

console.log(sumFor(array));

function sumWhile(lists) {
  let sum = 0;
  let i = 0;
  while (i < lists.length) {
    sum += lists[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(array));

function sumRecursion(lists) {
  if (lists.length === 0) {
    return 0;
  }
  return lists[0] + sumRecursion(lists.slice(1, lists.length));
}

console.log(sumRecursion(array));

function sumTheSimpleWay(lists) {
  return _.reduce(lists, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(array));

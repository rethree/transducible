export const partitionBy = f => ([left, right] = [[], []]) => x => (
  f(x) ? left.push(x) : right.push(x), [left, right]
);

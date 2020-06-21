export const flatMap = (n?) => resolve => {
  const limited = typeof n === 'number';
  const f = (n?) => (x, i) => {
    if (Array.isArray(x) && limited && n > 0) {
      for (const item of x) {
        limited ? f(n - 1)(item, i) : f()(item, i);
      }
    } else {
      resolve(x);
    }
  };
  return f(n);
};

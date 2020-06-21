export const repeat = n => resolve => x => {
  while (n > 0) {
    resolve(x);
    --n;
  }
};

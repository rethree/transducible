export const take = n => resolve => (x, i) => i > n || resolve(x);

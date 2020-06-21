export const skip = n => resolve => (x, i) => i <= n || resolve(x);

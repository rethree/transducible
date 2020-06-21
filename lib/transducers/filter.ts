import { Transducer } from '../types';

export const filter = <I>(
  pred: (x: I, position?: number) => boolean
): Transducer<I> => resolve => (x, i) => !pred(x, i) || resolve(x);

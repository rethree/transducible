import { Transducer } from '../types';

export const map = <I, O>(f: (x: I) => O): Transducer<I, O> => resolve => x =>
  resolve(f(x));

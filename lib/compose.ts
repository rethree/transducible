import { Transducer, Transducers, Transformer } from './types';

export const compose = <I, O>(...transducers: Transducers<I, O>) => (
  completingTransformer: Transformer<O>
): Transducer<I, O> =>
  transducers.reduceRight(
    (next, xf) => (x, position) => xf(y => next(y, position))(x, position),
    completingTransformer
  ) as any;

export const func = <I, O>(
  transducer: Transducer<I, O>
): ((x: I, position: number) => O) => {
  let out: O;
  const xf = transducer((x: O) => (out = x));
  return (x: I, position: number) => {
    xf(x, position);
    return out;
  };
};

export type _ = unknown;

export type Transformer<I = unknown> = (x: I, position) => void;

export type Transducer<I, O = I> = (complete: (x: O) => void) => Transformer<I>;

export type Transducers<I, O> =
  | [Transducer<I, O>]
  | [Transducer<I, _>, ...Transducer<_, O>[]];

export type Reducer<I, O = I[]> = (acc: O) => (item: I, position: number) => O;

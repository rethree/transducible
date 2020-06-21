import { Reducer, Transducer } from './types';

export const transduce = <I, O>(transducer: Transducer<I, O>) => <R>(
  ...[reduce, init]: [Reducer<O, R>?] | [Reducer<O, R>, R?]
) => (
  iterable: IterableIterator<I>
): undefined extends typeof reduce ? O : R => {
  const iterator = iterable[Symbol.iterator]();
  let acc: any =
    init !== undefined ? init : reduce !== undefined ? undefined : [];
  let position = 0;
  const completer = reduce
    ? x => {
        acc = reduce(acc)(x, position);
      }
    : x => acc.push(x);
  const transformer = transducer(completer);

  while (true) {
    const { done, value } = iterator.next();
    transformer(value, position);
    if (done) break;
    ++position;
  }

  return acc;
};

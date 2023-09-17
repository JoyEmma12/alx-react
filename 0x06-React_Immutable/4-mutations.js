import { Map } from "immutable";

export default function maps1() {
  const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
  });
};

export default function maps2(object2) {
    const map2 = maps1.withMutations(object2).set(2, 'Benjamin').set(4, 'Oliver');
}
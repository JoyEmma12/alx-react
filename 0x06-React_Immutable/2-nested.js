import { List, Map, fromJS } from 'immutable';
import { FromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const accessImmutable = fromJS(object);
  return accessImmutable.getIn(array, undefined);
}

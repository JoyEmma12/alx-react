import { FromJS, fromJS } from "immutable";

export default function getImmutableObject(object) {
  return fromJS(object);
}

import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  // Retrieves value of an object at the define path in the array
  //

  const myMap = Immutable.fromJS(object);
  return myMap.getIn(array);
}

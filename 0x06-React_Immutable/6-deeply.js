import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2) {
  // Deeply merges page2 to page1
  //
  // page1 - object
  // page2 - object
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.mergeDeep(myMap2);
}

export default mergeDeeplyElements;

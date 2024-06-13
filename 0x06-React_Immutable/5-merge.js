import Immutable from 'immutable';

function concatElements(page1, page2) {
  // concatenates page2 to page1
  //
  // page1 - array
  // page2 - array
  const myList2 = Immutable.List(page2);
  return myList.concat(myList2);
}

function mergeElements(page1, page2) {
  // merges page2 to page1
  //
  // page1 - object
  // page2 - object
  //
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.merge(myMap2);
}

export { concatElements, mergeElements };

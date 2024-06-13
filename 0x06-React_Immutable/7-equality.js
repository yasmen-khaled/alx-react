import { is } from 'immutable';

function areMapsEqual(map1, map2) {
  // Compares two immutable maps and returns true if they are equal
  return is(map1, map2);
}

export default areMapsEqual;

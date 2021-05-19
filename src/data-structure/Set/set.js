/**
 *A set is a collection of items that are unordered and
  consists of unique elements(meaning they cannot be repeated).
 */
class Set {
  constructor() {
    this.items = {};
  }

  /**
   * add(element). This adds a new element to the set.
   * @param {any} element
   * @return {bool}
   */
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  /**
   * delete(element). This removes the element from the set.
   * @param {any} element
   * @return {bool}
   */
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  /**
   * has(element): This returns true if the element exists in the set and falseotherwise.
   * @param {any} element
   * @returns {bool}
   */
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  /**
   * clear(): This removes all the elements from the set.
   */
  clear() {
    this.items = {};
  }

  /**
   * size(): This returns how many elements the set contains.
   * It is similar to thelength property of an array.
   * @returns {number}
   */
  size() {
    let result = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        result++;
      }
    }
    return result;
  }

  /**
   * values(): This returns an array of all the values (elements) of the set.
   * @returns {array}
   */
  values() {
    let result = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return key;
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

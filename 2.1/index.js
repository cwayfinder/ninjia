var list = (function iife() {
  function create() {
    return {};
  }

  function isEmpty(l) {
    return 'value' in l;
  }

  function add(l, val) {
    var last = l;
    while (last.next) {
      last = last.next;
    }

    if (isEmpty(last)) {
      last.next = {
        value: val,
        next: null
      };
    } else {
      last.value = val;
      last.next = null;
    }
  }

  function toArray(l) {
    var result = [];
    var last = l;
    while (last.next) {
      result.push(last.value);
      last = last.next;
    }
    result.push(last.value);

    return result;
  }

  function size(l) {
    var result = 0;
    var last = l;
    while (last.next) {
      result++;
      last = last.next;
    }
    result++;

    return result;
  }

  function get(l, index) {
    var currIndex = 0;
    var last = l;
    while (last.next && currIndex < index) {
      currIndex++;
      last = last.next;
    }

    return last;
  }

  function remove(l, index) {
    var el = get(l, index - 1);
    el.next = el.next.next;
  }

  function insertAt(l, val, index) {
    var el = get(l, index - 1);

    el.next = {
      value: val,
      next: el.next
    };
  }

  function search(l, val) {
    var last = l;
    while (last.next && val !== last.value) {
      last = last.next;
    }

    return last;
  }

  return {
    create: create,
    add: add,
    toArray: toArray,
    size: size,
    get: get,
    remove: remove,
    insertAt: insertAt,
    search: search
  };
}());


var x = list.create();
list.add(x, 1);
console.log(x);
list.add(x, 3);
console.log(x);
list.add(x, 5);
console.log(x);
console.log(list.toArray(x)); // [1, 3, 5]
console.log(list.size(x)); // 3
list.remove(x, 1);
console.log(list.toArray(x)); // [1, 5]
list.add(x, 8);
list.add(x, 10);
console.log(list.toArray(x)); // [1, 5, 8, 10]
list.insertAt(x, 11, 2);
console.log(list.toArray(x)); // [1, 5, 11, 8, 10]
console.log(list.search(x, 11));
console.log(x);


// {},
// { value: 1, next: null }
// { value: 1, next: { value: 3, next: null } }
// { value: 1, next: { value: 3, next: { value: 5, next: null }} }

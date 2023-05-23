const is = {};

Object.defineProperty(is, 'num', {
  value: function(value) {
    return typeof value === 'number';
  }
});

Object.defineProperty(is, 'nan', {
  value: function(value) {
    return Number.isNaN(value);
  }
});

Object.defineProperty(is, 'str', {
  value: function(value) {
    return typeof value === 'string';
  }
});

Object.defineProperty(is, 'bool', {
  value: function(value) {
    return typeof value === 'boolean';
  }
});

Object.defineProperty(is, 'undef', {
  value: function(value) {
    return typeof value === 'undefined';
  }
});

Object.defineProperty(is, 'def', {
  value: function(value) {
    return typeof value !== 'undefined';
  }
});

Object.defineProperty(is, 'arr', {
  value: function(value) {
    return Array.isArray(value);
  }
});

Object.defineProperty(is, 'obj', {
  value: function(value) {
    return typeof value === 'object' && value !== null;
  }
});

Object.defineProperty(is, 'fun', {
  value: function(value) {
    return typeof value === 'function';
  }
});

Object.defineProperty(is, 'truthy', {
  value: function(value) {
    return Boolean(value);
  }
});

Object.defineProperty(is, 'falsy', {
  value: function(value) {
    return !value;
  }
});

console.log(is.num(25))
console.log(is.num('CNémo'))
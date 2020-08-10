Proxy.prototype = {
  name: "Proxy",
  valueOf() {
    console.log("do thisfunction!");
    return Object.create(this);
  }
};

class ObjectWatch extends Proxy {
  constructor(target = {}, fn, keys = ["root"]) {
    super(target, {
      get: function (target, key, receiver) {
        const value = Reflect.get(target, key, receiver);
        if (Reflect.getOwnPropertyDescriptor(target, key) === undefined) {
          if (typeof value === "function") {
            return value.bind(target);
          }
        }

        return value;
      },
      set: function (target, key, value, receiver) {
        var p;
        if (typeof value == "object") {
          p = new ObjectWatch(value, fn, [...keys, key]);
        } else {
          p = value;
        }
        Reflect.set(target, key, p, receiver);
        if (typeof fn === "function") {
          fn(target, key, value, target[key], [...keys, key].join("."));
        }
        return true;
      }
    });
    Object.keys(target).forEach((key) => {
      this[key] = target[key];
    });
  }
}

var timer = null;

var stack = [];

function fn() {
  stack.forEach((item) => console.log(item));
  stack.length = 0;
  time = null;
}

function updateData(target, key, newValue, oldValue, path) {
  stack.push(`set ${path} ${oldValue} => ${newValue}`);
  timer = setTimeout(fn, 0);
}

class A {
  constructor() {
    return new ObjectWatch(this, updateData);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const b = new B();

b.data = {
  a: {}
};

b.data.a.name = "123";

b + 1;
1 + b
console.log("over!");

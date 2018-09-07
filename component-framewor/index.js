/**
 * example
 * @param {*} a
 * @param {*} b
 * @param {*} c
 */
function fn(/* params */ a, b, c) {
  return {
    scope: arguments,
    scopeFn: function() {
      console.log(a, b, c);
    }
  };
}


// https://www.zhihu.com/question/28987600
let { scope, scopeFn } = fn(1, 2, 3);

scope[0] = 4;
scope[1] = 5;
scope[2] = 6;
scopeFn(); // 4,5,6

function f(a, b, c) {
  let map = ["a", "b", "c"];
  let scope = new Proxy(arguments, {
    get: function(target, name) {
      return target[map.indexOf(name)];
    },
    set: function(target, name, value) {
      target[map.indexOf(name)] = value;
      return value;
    }
  });
  return {
    scope,
    fn: function(cb) {
      cb.call(this, a, b, c);
    }
  };
}

// let { scope, fn } = f(1, 2, 3);

// let self = {
//   name: 'this'
// };
// // fn.call(self,function renderFunction(a, b, c) {
// //   console.log(this,a, b, c);
// // });

// scope.a = 3;
// scope.b = 4;
// scope.c = 5;

// scope.d = 5;
// fn.call(self,function renderFunction(a, b, c) {
//   console.log(this,a, b, c);
// });

// function ff(a, code){
//   eval(code)
// }

// ff(1,'console.log(a)')

function fun() {
  `function scopeFactory(${propers}){
    return 
    ${`function (){
      // ${propers}
    }`}
  }`;
}
function Component(args, ...values) {
  args = args.map(item => item.replace(/\s/g, ""));

  return eval(`(function (${args}) {
    let map = [${args.map(item => `'${item}'`)}];
    let scope = new Proxy(arguments, {
      get: function(target, name) {
        return target[map.indexOf(name)];
      },
      set: function(target, name, value) {
        target[map.indexOf(name)] = value;
        // do some 
        return value;
      }
    });
    return {
      scope,
      output: function() {
        ${args
          .filter(item => !!item)
          .map(item => `console.log('<div>'+${item}+'</div>');`)
          .join("")}
      },
    };
  })`)(...values);
}

let { scope, output } = Component`
a${1}
b${2}
c${3}
`;

output();

scope.a = 3;
scope.b = 4;
scope.c = 5;

output();

console.log(scope.a);

// Prototype based inheritance

// objects are created by constructors
// constructors are functions
// constructors have a property called `prototype` where shared functions are kept
// Prototype Chain: obj => constructor prototype => Object.prototype => null

// Date.now() the now method is attached to Date directly, not in the prototype
// let today = new Date();
// today is an instance object created by Date()
// today.getFullYear(); the getFullYear method is inside Date.prototype
// Prototype chain: today => Date.prototype => Object.prototype => null

let myObj = {
  myNum: 123,
  myMethod: function () {
    console.log('hello');
  },
};
// myobj was created by `new Object()`
// myobj has access to the methods inside `Object.prototype`
let methods1 = Object.getOwnPropertyNames(myObj);
console.log(methods1);

let methods2 = Object.getOwnPropertyNames(Object.prototype);
console.log(methods2);

// Object.create(protoObj, {prop:{value:4, enumerable:true, writable:true}})

// Object.assign(target, source1, source2, source3)
//copies all `enumerable own` properties

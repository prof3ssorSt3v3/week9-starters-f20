let p = new Promise((resolve, reject) => {
  //do something
  //call resolve or reject
  resolve(42);
});

p.then((val) => {
  //resolve will call then
  console.log(val);
}).catch((err) => {
  //reject will call catch
  console.error(err);
});

/*
Promise.race([p1, p2, p3])
  .then((val) => {
    //first resolve will run this function
  })
  .catch((err) => {
    //reject called by one of them before a resolve
  });

Promise.all([p1, p2, p3])
  .then(([val1, val2, val3]) => {
    //after all three resolve we have an array of results
  })
  .catch((err) => {
    //reject called by one of them
  });
*/

const { userCreator } = require("../util");

// const user = userCreator.createRandomUser();
// const car = { name: "Toyota", year: "2002", type: "Crossover" };
//
// const map = new Map(Object.entries(user));
//
// map
//   .set(car, new Date())
//   .set(car, new Date())
//   .set(NaN, "This is NaN")
//   .set(function () {}, "This is function")
//   .set(true, "this is true")
//   .set(true, "this is true2")
//   .set(false, "this is false");
//
// const item = map.get(car);
// const item2 = map.get(true);

// console.log(item);
// console.log(item2);
// console.log(map.has(car));
//
// console.log(map.size);
//
// map.delete(NaN);
//
// console.log(map.size);
// console.log(map)
//
// for (let [ key, value ] of map) {
//     console.log(key, value)
// }
//
// for (let value of map.values()) {
//     console.log(value)
// }
//
// for (let keys of map.keys()) {
//     console.log(keys)
// }
//
// map.forEach( (value, key, map) => {
//     console.log(value, key)
// })

// map.clear();
// console.log(map);
// console.log(map.size);

// ========================================

// let user = userCreator.createRandomUser();
// let user2 = userCreator.createRandomUser();

// const array = [user];

// const weackMap = new WeakMap([
//   [user, "text"],
//   [user2, "user 2"],
// ]);
//
// console.log(weackMap);
// console.log(weackMap.has(user));
// console.log(weackMap.get(user));
//
// user = null;
//
// console.log(weackMap.has(user));
// const id = weackMap.delete(user2);
// console.log({ id });
// console.log(weackMap.has(user2));

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) cache.set(user, Date.now());

  return cache.get(user);
}

let user1 = userCreator.createRandomUser();
let user2 = userCreator.createRandomUser();
let user3 = userCreator.createRandomUser();

cacheUser(user1);
cacheUser(user2);
cacheUser(user3);

console.log(cache.has(user1));

user1 = null;

console.log(cache.has(user1));

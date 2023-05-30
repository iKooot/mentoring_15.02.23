let obj = {
  name: "Sergey",
  age: 32,
  job: "fullstack",
};

const entries = [
  ["name", "Sergey"],
  ["age", 32],
  ["job", "fullstack"],
];

const car = { car: "Toyota", year: 2002 };

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

const map = new Map(entries);

map.set("email", "example@email.com").set(car, "car").set(NaN, "This is NaN");

console.log(map);
console.log(map.get(car));

const isDeleted = map.delete(NaN);

console.log(isDeleted);
console.log(map);
console.log(map.has(NaN));
console.log(map.size);

for (let entrie of map.entries()) {
  console.log({ entrie });
}

for (let [key, value] of map) {
  console.log(key, value);
}

for (let value of map.values()) {
  console.log(value);
}

for (let key of map.keys()) {
  console.log(key);
}

map.forEach((value, key, map) => {
  console.log(value, key);
});

const arrayFromMap = [...map];
console.log(arrayFromMap);

const arrayFromMap2 = Array.from(map);
console.log(arrayFromMap2);

const objectFromMap = Object.fromEntries(map.entries());
console.log(objectFromMap);

map.clear();
console.log(map.size);

const users = [{ name: "Elena" }, { name: "Sergey" }];

const visits = new Map();
visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60));

function laseVisits(user) {
  return visits.get(user);
}

console.log(visits);
console.log(laseVisits(users[0]));

// ===============================================

let object = { name: "Sergey" };

const array = [object]

object = null;

console.log(object);
console.log(array);

const weakMap = new WeakMap([ [obj, "some"] ]);
// get set delete has
console.log(weakMap);
console.log(weakMap.has(obj));
console.log(weakMap.get(obj));
obj = null;
console.log(weakMap.has(obj));

const cache = new WeakMap();
let user1 = {name: 'Lena'}
let user2 = {name: 'Vasya'}

function cacheUser(user) {
  if (!cache.has(user)) cache.set(user, Date.now())

  return cache.get(user)
}

cacheUser(user1)
cacheUser(user2)

console.log(cache.has(user1))
console.log(cache.has(user2))

user1 = null

console.log(cache.has(user1))
console.log(cache.has(user2))




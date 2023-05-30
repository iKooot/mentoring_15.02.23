const { userCreator } = require("../util");

const array = [1, 1, 1, 1, 1, 2];

const set = new Set(array);

set.add(1).add(2).add(3).add(3).add(3).add(3).add(3).add(3).add(3);

console.log(set);
console.log(set.has(5));
console.log(set.delete(3));
console.log([...set]);
console.log(Array.from(set));

console.log(set.size);
set.clear();
console.log(set.size);

const user = userCreator.createRandomUser();
const users = [ user, user, user, user];

const uniqueIds = Array.from(new Set(users));

console.log(uniqueIds);

const uniqueArrayIds = [];

users.forEach(({ userId }) => {
  if (!uniqueArrayIds.includes(userId)) uniqueArrayIds.push(userId);
});

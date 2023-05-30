const { faker } = require("@faker-js/faker");

function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

function createRandomUsers(count) {
  return faker.helpers.multiple(createRandomUser, {
    count,
  });
}

module.exports = { createRandomUser, createRandomUsers };

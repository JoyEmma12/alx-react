import getImmutableObject from "./0-fromjs";

const user = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    state: "America",
  },
  hobbies: ["reading", "coding"],
};

const display = getImmutableObject(user);
console.log(display);

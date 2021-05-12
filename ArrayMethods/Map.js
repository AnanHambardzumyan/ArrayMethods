const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

// Get Usernames

let UserName = (users) => users.map((users) => users.username);
console.log(UserName(users));

// array.length of Usernams
let UserNameLength = (users) => users.map((user) => user.username.length);
console.log(UserNameLength(users));

// parse integers

let ParseInteger = (array) => {
  return array.map((el) => parseInt(el)).map((el) => (el ? el : null));
};

console.log(ParseInteger(["1", "px", "6"]));

// console.log({
//   ...{hello: "World"}
// })
//test change

//object spread operator
const user = { username: 'angelica' }
const adminUser = {
  ...user,
  admin: true
}


// console.log(user);
// console.log(adminUser);

const clock = {
  hours: 13,
  minutes: 40,
  seconds: 23
}

const { seconds, ...clone } = clock;


console.log(clock)
console.log(clone)

function (obj) {
  return `Hello ${obj.firstName} ${obj.lastName}`
}

//is same as

function ({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`
}

//so if you're only using the properties of an object
//you can pass them in directly with this notation

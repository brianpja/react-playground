function copyAndAppendComputed(object, propertyName, value) {
  const result = Object.assign({}, object)
  result[propertyName] = value
  return result
}

function copyAndAppendComputedClone(object, propertyName, value) {
  return {
      ...object,
      [propertyName]: value
  }
}


// const id = 2
// const name = 'eliza'
//
// const person = {
//   id: id,
//   name: name,
// }
// is same as saying..
// const id = 2
// const name = 'eliza'
//
// const person = {
//   id,
//   name,
// }
//
// function (id, name) {
//   const result = {}
//   result[id] = { id, name }
//   return result
// }
// is same as saying..
// function (id, name) {
//   return {
//     [id]: { id, name }
//   }
// }

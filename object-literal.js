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

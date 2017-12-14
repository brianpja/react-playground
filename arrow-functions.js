function canDrive (person) {
  if (person.age > 15) {
    return true;
  }
  else {
    return false;
  }
}

const canDrive2 = (person) => {
  if (person.age > 15) {
    return true;
  }
  else {
    return false;
  }
}

//if there is only one argument, no parentheses are needed
//and no if-statement is necessary
const canDrive3 = person => {
  return person.age > 15
}

//simplified further
const canDrive4 = person =>
  person.age > 15

//or just one line
const canDrive5 = person => person.age > 15

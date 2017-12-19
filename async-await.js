
//if getPeople returns a promise you can return the third person like this:
function () {
  return getPeople().then(people => people[2])
}

//this will do the same thing using async and await:
async function () {
  const people = await getPeople()
  return people[2]
}

//this uses fetch to do a get request
async function getData(path) {
  const response = await fetch(path)
  return await response.json()
}

//this uses fetch to do a post request:
async function getData(path, payload) {
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return await response.json()
}

//and if you want to add headers:
async function getData(path, payload) {
  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  return await response.json()
}

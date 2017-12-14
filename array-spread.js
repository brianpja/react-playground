const items = [1,2,3];
const clone = [
  ...items,
  4,
]

//acts like push
//items = [1,2,3]
//clone = [1,2,3,4]

const clone2 = [
  4,
  ...items,
]

//acts like unshift
//clone2 = [4,1,2,3]

const index = items.indexOf(2);
const clone3 = [
  ...items.slice(0, index),
  77,
  ...items.slice(index + 1),
]

//changes an item
//clone3 = [1,77,3]

const clone4 = items.filter(item => item !== 2)

//removes an item anywhere (gets rid of every item with value of 2)
//clone4 = [1,3]

const clone5 = items.slice(0, -1)
//removes last item
//clone5 = [1,2]

const clone6 = items.slice(1);
//removes first item
//clone6 = [2,3]

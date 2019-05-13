module.exports = {
  succeed,
  fail,
  repair,
  // get,
};


// A repair(item) method that accepts an item object and returns a new item with the durability restored to 100

function repair(item) {
  if (item.durability < 100) {
    return item.durability === 100
  } else {
    return { ...item };
  }
}


// When enhancement succeeds
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

function succeed(item) {
  if (item.enhancement < 20) {
    return item.enhancement =+ 1
  } else {
    return item.enhancement;
  }
}


// When enhancement fails
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if (item.enhancement < 15) {
    return item.durability =- 5
  } if (item.enhancement >= 15) {
    return item.durability =- 10
  } if (item.enhancement > 16) {
    return item.enhancement--
  }
}

// function get(item) {
//   return { ...item };
// }

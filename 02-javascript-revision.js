//Primitive data Types
// * Number (floats - decimal point, integers - whole numbers)
// * Boolean
// * Strings
// Use to atomic values

// Reference data types
// Arrays: access array by index
// Objects: access array by key
// - What if we array of objects?
// - What if we objects with arrays

let homeAddress = {
  "street":"Yishun Ring Road",
  "building": {
    "blk": "666",
    "floor": 13,
    "unit": 1313
  },
  "tenants":["Ah Kow", "Ah Mew", "Ah Seng"]
}
// how do we get which floor?
// console.log(homeAddress.building.floor);

// how do we get the second tenant in the homeAddress
// console.log(homeAddress.tenants[1])
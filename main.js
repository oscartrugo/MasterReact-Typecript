const fruits = [undefined, 'guava', 'coconout'];

const [firstFruit = 'strawberry', ...otherFruits] = fruits

console.log(firstFruit)
console.log(otherFruits)
//---------------------------------------------------------------------------
// const fruits = ['apple', 'avocado']

// const newFruits = [...fruits, 'guava']

// console.log('fruits', fruits)
// console.log('newFruits', newFruits)
//---------------------------------------------------------------------------
// const userDetails = {
//     name: 'Oscar',
//     address: 'Mexico',
//     sample: {
//         test: 'test'
//     }
// }

// const {name: newName = 'Trujillo', ...otherDetails} = userDetails

// console.log(newName)
// console.log(otherDetails)

// const newUserDetails = { ...userDetails, mobileNumber: 123}

// newUserDetails.sample.test = 'newTest';

// console.log('userDetails: ', userDetails)
// console.log('newUserDetails: ', newUserDetails)

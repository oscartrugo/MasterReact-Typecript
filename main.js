const orig = ['avocado', 'apple', {name: 'strawberry'}]

const copy = JSON.parse(JSON.stringify(orig));

copy[2].name = 'coconut'

console.log('orig: ', orig)

console.log('copy: ', copy)


// const orig = {
//     test: 'test', 
//     userDetails: {
//         address: {
//             province: 'Province',
//             country: 'country'
//         },
//         name: 'myObject'
//     },
//     myFn: () => {},
//     undef: undefined,
// }

// const copy = JSON.parse(JSON.stringify(orig));
// //const copy = Object.assign({}, orig)
// // const copy = orig; // newTest

// copy.userDetails.name = "newName";
// //copy.test = 'newTest';

// console.log('orig: ', orig)
// console.log('copy', copy);
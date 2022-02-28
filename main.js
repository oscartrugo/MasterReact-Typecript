let myNumber = 5;

function changeNumber(){
    return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    })
}

async function startChange(){ //Add async to make starChange function asynchronous
    await changeNumber(); //It will wait for a changeNumber function before it runs the console.log
    console.log(myNumber);

}

startChange();

// function calculateSquareArea() {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const squareArea = 5*5;
//             //resolve(squareArea)
//             resolve(squareArea)
//         }, 500)
//     })
// }

// const myPromises = [ //Array of promises
//     new Promise((resolve, reject) => setTimeout(() => reject(100), 100)),
//     new Promise((resolve, reject) => setTimeout(() => reject(200), 200)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(300), 300)) // reject = catch: undefined. 
//     ];

// function onFulFilled(data){
//     console.log('onFulFilled: ', data)
// }

// function onRejected(reason){
//     console.log('onRejected: ', reason)
// }

//For Promise.all, returns rejected with at least one reject instead of resolve
//For Promise.allsettled it will just wait for all promises to be settlet, that's it
//For Promise.any it will actually wait for one promise in the array of promises to be fulfilled,
// which ever will complete first
//For Promise.race it will actually look for either reject or resolve, whatever runs first. 

// Promise.any(myPromises)
// .then(onFulFilled)
// .catch((reason) => {
//     console.log('catch: ', reason)
// })

/**
 * We can actually catch the reject of our promise and the error of our .then function 
 */
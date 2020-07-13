// callback

numbers = [1,2,3,4,5,6]

isOddNumber = function(num) {
  return num-4;
}

const result = numbers.filter(num => isOddNumber(num))

console.log(result)

// const doWorkCallback = (callback) => {
//   setTimeout(() => {
//     // callback('This is my error.', undefined)
//     callback(undefined, 'It worked!')
//   }, 2000)
// }

// doWorkCallback((error, result) => {
//   if (error) {
//     return console.log(error)
//   }
//   console.log(result)
// });

// const doWorkCallback2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('It worked!');
//     reject('Erroorrr')
//   }, 2000)
// })


// doWorkCallback2
// .then(res => console.log('Success', res))
// .catch(error => console.log(error));


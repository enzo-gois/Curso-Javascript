//CALLBACK
// console.log('1')

// setTimeout(function() {
//   console.log('3')
// }, 2000)

// console.log('2')


// Promisses
// let p = Promise.resolve(5)
// console.log("Outros códigos")
// console.log(p)
// p.then((value) => {console.log(`O valor é ${value}`)})


// Falha Promisses
// let p = Promise.resolve(new Error("não deu certo"))

// console.log("lalala")

// p.then(value => console.log(value))
//  .catch(reason => console.log("Falhou: " + reason))


// REJECT PROMISE
// function verificarNumero(num) {
//   return new Promise((resolve,reject) => {
//     if(num ==2) {
//       resolve(console.log(`O número é ${num}`))
//     } else {
//       reject(new Error("Falhou"))
//     }
//   })
// }

// verificarNumero(2)
// verificarNumero(3)


// VÁRIAS PROMISES
// const p1 = new Promise(function(resolve,reject) {
//   setTimeout(function() {
//     resolve(10)
//   }, 5000)
// })

// const p2 = new Promise.resolve(10)

// const p3 = new Promise((resolve,reject) => {
//   resolve(10)
// })

// Promise.all([p1,p2,p3])


//ASYNC FUNCTION
// async function somar(a, b) {
//   return a + b
// }

// console.log(somar(2,4))
// somar(2,4).then(value => console.log(value))


//AWAIT
// function somaComDelay(a,b) {
//   return new Promise(resolve => {
//     setTimeout(function() {
//       resolve(a +b)
//     }, 4000)
//   })
// }

// async function resSoma(a,b,c) {
//   let x = somaComDelay(a,b)
//   let y = c

//   return await x + y
// }

// resSoma(1,2,3).then(value => console.log(value))


//GENERATOR
function* criadorId() {
  let id = 0
  while(true) {
    yield id++
  }
}

let criaId = criadorId()
console.log(criaId.next().value)
console.log(criaId.next().value)
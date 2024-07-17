// window.addEventListener("keydown", function(e) {
//   if(e.key == "q") {
//     console.log("apertou a letra Q")
//   }
// })

// let btn1 = document.querySelector("#btn1")
// let btn2 = document.querySelector("#btn2")
// let a = document.querySelector('a')

// function msg() {
//   console.log("Clicou em mim")
// }

// btn1.addEventListener("click",msg)

// btn2.addEventListener("click", function () {
//   btn1.removeEventListener("click",msg)
// })

// a.addEventListener("click", function(e) {
//   e.preventDefault()
//   console.log("clicou mas não mudou de link")
// })

// let btn1 = document.querySelector("#btn1")
// let btn2 = document.querySelector("#btn2")

// btn1.addEventListener("mousedown", function() {
// console.log("Apertou o botão")
// })

// btn1.addEventListener("mouseup", function() {
// console.log("Soltou o botão")
// })

// btn2.addEventListener("dblclick", function() {
//   console.log("Apertou o botão duas vezes")
// })

// btn2.addEventListener("contextmenu", function(em) {
//   em.preventDefault()
//   console.log("Botão direito")
// })


// window.addEventListener("mousemove", function(e) {

//   console.log(e.x)
//   console.log(e.y)
// })


// window.addEventListener("scroll", function(e) {
//   if(window.pageYOffset > 1000) {
//     console.log("Ativou")
//   }
// })

let input = document.querySelector("input")

input.addEventListener("focus", function() {
  console.log("Entrou em foco")
})

input.addEventListener("blur", function() {
  console.log("saiu do foco")
})

window.addEventListener("load", function() {
  this.alert("Assine os termos de uso")
})
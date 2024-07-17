// let pessoa = {
//   nome: "sem Nome",
//   setNome: function(novoNome){
//     this.nome = novoNome
//   },
//   getNome: function(){
//     return this.nome
//   }
// }

// console.log(pessoa.nome)
// pessoa.setNome("Enzo")
// console.log(pessoa.getNome())



// let pessoa = {
//   maos: 2
// }

// console.log(Object.getPrototypeOf(pessoa))
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

// console.log(pessoa.hasOwnProperty("maos"))

// let pessoaNova = Object.create(pessoa)
// console.log(pessoaNova.maos)



// let cachorro = {
//   patas: 4,
//   raca: 'SRD',
//   latir: function(){
//     console.log("Au au")
//   }
// }

// let husky = Object.create(cachorro)
// husky.raca = "Husky"
// husky.latir()
// console.log(husky.raca)



// function criarCachorro(raca, cor){
//   let cachorro = Object.create({});
//   cachorro.raca = raca;
//   cachorro.cor = cor;
//   return cachorro
// }
// let doberman = criarCachorro('Doberman', 'Branco')
// console.log(doberman)



// function Cachorro(raca, cor){
//   this.raca = raca;
//   this.cor = cor
// }

// Cachorro.prototype.uivar = function() {
//   console.log("Auuuuuuu")
// }

// let husky = new Cachorro('Husky', 'Branco')
// husky.uivar()
// console.log(husky)



// class Cachorro {
//   constructor(raca, cor) {
//     this.raca = raca
//     this.cor = cor
//   }
//   latir() {
//     return "Au au"
//   }
//   get getRaca() {
//     return this.raca
//   }
//   set setRaca(novaRaca) {
//     this.raca = novaRaca
//   }
// }

// // Cachorro.prototype.raca = 'SRD'

// // let patas = Symbol();
// // Cachorro.prototype[patas] = 4

// let viraLata = new Cachorro('Vira Lata', 'Caramelo')
// viraLata.latir()

// //acessando symbol
// // console.log(Cachorro.prototype[patas])

// let pastor = new Cachorro('Golden', 'Marrom')
// console.log(pastor.getRaca)
// pastor.setRaca = 'Pastor'
// console.log(pastor)



// class Mamifero {
//   constructor(patas) {
//     this.patas = patas
//   }
// }

// class Cachorro extends Mamifero {
//   constructor(patas, raca) {
//     super(patas, patas)
//     this.raca = raca
//   }

//   latir() {
//     console.log("au au")
//   }
// }

// let pug = new Cachorro(4, 'Pug')
// console.log(pug.patas)

// console.log(pug instanceof(Mamifero))

const objeto = { a: 1, b: 2, c: 3 };
const { a, b } = objeto; 
console.log(a, b);
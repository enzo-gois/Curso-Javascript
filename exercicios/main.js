//EXERCICIO 1
// console.log('Oi, meu nome é Enzo')
// console.log("Olá, meu nome é Enzo")
// console.log(`Salve, meu nome é Enzo`)

//EXERCICIO 2
// console.log(10)
// console.log(5.5)
// console.log(5+5)

//EXERCICIO 3
// console.log(5 > 10)
// console.log(3 <= 5)
// console.log(7 != 7)

//EXERCICIO 4
// let var1 = true
// let var2 = false
// let var3 = true
// console.log(var1 && var3)
// console.log(var2 || var1)
// console.log(!var1)

//EXERCICIO 5
// let nome;
// console.log(5 + nome)

//EXERCICIO 6
// let nome = "String"
// let number = 10
// let bool = true;

//EXERCICIO 7 
// let idade = 17
// if(idade >= 18){
//   console.log('Pode Entrar')
// } else {
//   console.log('Não pode entrar')
// }

//EXERCICIO 8 
// const nome = "Enzo"
// if(nome === "Enzo"){
//   console.log(`Saudações ${nome}`)
// }

//EXERCICIO 9
// console.log(Math.pow(2,2))
// console.log(Math.pow(3,2))
// console.log(Math.pow(18,2))

//EXERCICIO 10
// let velocidadeCarro = 90
// let limiteVelocidade = 80
// if(velocidadeCarro > 80){
//   console.log("Levou multa! ")
// } else {
//   console.log("Não levou multa! ")
// }

//EXERCICIO 11
// let idade = 15
// let cnh = false
// if(idade >= 18 && !cnh) {
//   console.log("Voçê precisa de uma CNH para dirigir! ")
// } else if(idade >=18 && cnh){
//   console.log("Voçê pode dirigir!")
// } else {
//   console.log("Voçê não pode dirigir!")
// }

//EXERCICIO 12 
// let i = 0
// while(i <= 10){
//   console.log(i)
//   i++
// }

//EXERCICIO 13
// for(i = 100;i >= 50;i--){
//   console.log(i)
// }

//EXERCICIO 14
// let i = 0;
// for(i;i<=50;i++){
//   if(i % 2 == 0){
//     console.log(`${i} PAR`)
//   } else {
//     console.log(`${i} IMPAR`)
//   }
// }

//EXERCICIO 15
// let num = 89
// count = 0
// for(let i = 1;i <= num;i++){
//   if(num % i == 0){
//     count++
//   }
// }
// if(count == 2){
//   console.log("O número é primo")
// } else {
//   console.log("O numero não é primo")
// }

//EXERCICIO 16
// function helloWorld(){
//   console.log("Hello World!")
// }
// helloWorld()

//EXERCICIO 17
// function idade(num){
//   console.log(`Voce tem ${num} anos`)
// }
// idade(19)
// idade(36)

//EXERCICIO 18
// function soma(x,y){
//   return x + y
// }
// console.log(soma(3,8))

//EXERCICIO 19
// function numeroAleatorio(num){
//   return Math.floor(Math.random()*num) + 1
// }
// console.log(numeroAleatorio(30))
// console.log(numeroAleatorio(70))
// console.log(numeroAleatorio(10))

//EXERCICIO 20
// function autoEscola(idade){
//   if(idade >= 18){
//     return "Voce pode entrar na auto escola! "
//   } else {
//     return "Voce não pode entrar na auto escola! "
//   }
// }
// console.log(autoEscola(19))
// console.log(autoEscola(16))

//EXERCICIO 21
// function tipoVar(dado){
//   if(typeof dado === 'string'){
//     console.log("Esse dado é uma String! ")
//   } else if(typeof dado === 'number'){
//     console.log("Esse dado é um Number! ")
//   } else if(typeof dado === 'boolean') {
//     console.log("esse dado é um Boolean! ")
//   }
// }
// tipoVar(22)
// tipoVar('enzo')
// tipoVar(true)

//EXERCICIO 22
// function moduloNumero(x){
//   return Math.abs(x)
// }
// console.log(moduloNumero(-5))
// console.log(moduloNumero(15))
// console.log(moduloNumero(-5.4))

//EXERCICIO 23 
// function tamanhoString(texto){
//   if(texto.length > 10){
//     console.log("Texto muito longo! ")
//   } else {
//     console.log("Texto dentro do limite! ")
//   }
//  console.log(texto.length)
// }
// tamanhoString("subi")
// tamanhoString("subinoonibus")

//EXERCICIO 24 
// function potencia(x,y){
//   // return Math.pow(x,y)
//   // return x ** y
//   let resultado = 1
//   for(let i = 1;i<y+1;i++){
//     resultado*= x
//   }
//   return resultado
// }
// console.log(potencia(3,2))
// console.log(potencia(2,6))
// console.log(potencia(4,4))

//EXERCICIO 25
// function imprimiPar(num){
//   for(i = num;i>=0;i--){
//     if(i % 2 == 0){
//       console.log(i)
//     }
//   }
// }

// imprimiPar(100)
// imprimiPar(50)
// imprimiPar(10)

//EXERCICIO 26 
// let array = [0,1,2,3,4]
// console.log(array[0])
// console.log(array[2])
// console.log(array[3])

//EXERCICIO 27
// let array1 = [4,6]
// let array2 = [4,6,7,2]
// console.log(array1.length)
// console.log(array2.length)

//EXERCICIO 28
// let onibus = {
//   rodas: 8,
//   limitePassageiros: 40,
//   portas: 2
// }
// console.log(onibus.rodas)
// console.log(onibus.limitePassageiros)
// console.log(onibus.portas)

//EXERCICIO 29
// let onibus = {
//   rodas: 8,
//   limitePassageiros: 40,
//   portas: 2,
// }
// delete onibus.rodas
// onibus.janelas = 20;
// console.log(onibus.janelas)

//EXERCICIO 30
// let nomes = ['José', 'Maria', 'João', 'Enzo', 'Igor', 'David']
// if(nomes.includes('Enzo')){
//   console.log("Eu estou na lista!")
// }

//EXERCICIO 31
// let maisDe5 = [1,2,3,4,5,6]
// let menosDe5 = [1,2,3]

// function verificaElementos(array){
//   if(array.length >= 5){
//     console.log('Muitos elementos')
//   } else {
//     console.log('Poucos elementos')
//   }
// }

// verificaElementos(maisDe5)
// verificaElementos(menosDe5)

//EXERCICIO 32
// let array = [1,2,3,4,5]
// array.forEach(num => {
//   console.log(num)
// })

//EXERCICIO 33
// let eu = {
//   "nome": "Enzo",
//   "idade": "19",
//   "peso": "67kg"
// }
// console.log(eu.nome)
// console.log(eu.idade)
// console.log(eu.peso)

//EXERCICIO 34
// let frase = "subi no onibus"
// let array = frase.split(' ')
// for(let i =0;i<array.length;i++){
//   console.log(array[i])
// }

//EXERCICIO 35
// let calculadora = {
//   somar: function(x,y) {console.log(x+y)},
//   subtrair: function(x,y) {console.log(x-y)},
//   multiplicar: function(x,y) {console.log(x*y)},
//   dividir: function(x,y) {console.log(x/y)}
// }

// calculadora.somar(3,6)
// calculadora.subtrair(8,3)
// calculadora.multiplicar(7,7)
// calculadora.dividir(100,10)


// EXERCICIO 36
// class Conta {
//   constructor(){
//     this.saldo = 0
//   }
//   deposito(valor){
//     this.saldo += valor
//   }
//   saque(valor){
//     this.saldo -= valor
//   }
// }

// let minhaConta = new Conta();
// minhaConta.deposito(150)
// console.log(minhaConta.saldo)
// minhaConta.saque(75)
// console.log(minhaConta.saldo)


//EXERCICIO 37
// class Carrinho {
//   constructor(itens,qtd,valorTotal) {
//     this.itens = itens
//     this.qtd = qtd
//     this.valorTotal = valorTotal
//   }

//   addItem(item) {

//     let contador = 0;

//     for(let itemCarrinho in this.itens) {
//       if(this.itens[itemCarrinho].id == item.id) {
//         this.itens[itemCarrinho].qtd += item.qtd
//       }
//     }

//     if(contador == 0){
//       this.itens.push(item)
//     }

//     this.qtd += item.qtd
//     this.valorTotal += item.preco * item.qtd
//   }

//   removeItem(item) {
//     for(let itemCarrinho in this.itens) {
//       if(this.itens[itemCarrinho].id == item.id) {
//         let obj = this.itens[itemCarrinho]
//         let index = this.itens.findIndex(function(obj) {return obj.id == item.id})

//         this.qtd -= this.itens[itemCarrinho].qtd
//         this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd
        
//         this.itens.splice(index, 1)
//       }
//     }
//   }

// }

// let carrinho = new Carrinho([
//   {
//     id: 1,
//     nome: "Camisa",
//     qtd:1,
//     preco: 20
//   },
//   {
//     id: 2,
//     nome: "Calça",
//     qtd:2,
//     preco: 40
//   },
// ], 3, 120)

// console.log(carrinho)
// carrinho.addItem({id:1,nome:'Camisa', qtd:2,preco:20})
// console.log(carrinho)
// carrinho.addItem({id:3,nome:'Boné', qtd:3,preco:15})
// console.log(carrinho)
// carrinho.removeItem({id:1, nome:"Camisa", qtd:1, preco:20})
// console.log(carrinho)

//EXERCICIO 38
// class Endereco {
//   constructor(rua, bairro, cidade, estado) {
//     this.rua = rua
//     this.bairro = bairro
//     this.cidade = cidade
//     this.estado = estado
//   }
//   set novaRua(novaRua) {
//     this.rua = novaRua
//   }
//   set novoBairro(novoBairro) {
//     this.bairro = novoBairro
//   }
// }
// let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC")
// endereco.novaRua = "Rua dos Pombos"
// endereco.novoBairro = "Viveiro"
// console.log(endereco)

//EXERCICIO 40
// class Conta {
//   constructor(saldoCC, saldoCP, juros) {
//     this.saldoCC = saldoCC
//     this.saldoCP = saldoCP
//     this.juros = juros
//   }

//   deposito(valor) {
//     this.saldoCC += valor
//   }

//   saque(valor) {
//     this.saldoCC -= valor
//   }

//   transferenciaCP(valor) {
//     this.saldoCC -= valor
//     this.saldoCP += valor
//   }

//   transferenciaCC(valor) {
//     this.saldoCP -= valor
//     this.saldoCC += valor
//   }

//   jurosDeAniversario() {
//     let juros = (this.saldoCP * this.juros) / 100
//     this.saldoCP += juros
//   }

// }

// class ContaEspecial extends Conta {
//   constructor(saldoCC, saldoCP, juros) {
//     super(saldoCC, saldoCP, juros*2)
//   }
// } 

// let conta = new Conta(1000,5000,1)
// let conta2 = new ContaEspecial(10000,50000,1)


//EXERCICIO 41
// const validarMaiuscula = /[A-Z]/
// console.log(validarMaiuscula.test('testando'))
// console.log(validarMaiuscula.test('TESTANDO'))

//EXERCICIO 42
const validarId = /\d+ID\b/
console.log(validarId.test("31231ID"))
console.log(validarId.test("31231"))
console.log(validarId.test("asdadasdID"))

//EXERCICIO 43
// const validarMarca = /Marca:(Nike|Adidas|Puma|Ascis)/
// console.log(validarMarca.test("Marca: Adidas"))
// console.log(validarMarca.test("Marca:"))
// console.log(validarMarca.test("Marca: Umbro"))

//EXERCICIO 44
// const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
// console.log(validaIp.test("127.0.0.1"))
// console.log(validaIp.test("8.8.8.8"))
// console.log(validaIp.test("192.168.0.62"))
// console.log(validaIp.test("192.168.0"))
// console.log(validaIp.test("192"))

//EXERCICIO 45
// const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-]_/
// console.log(validaNomeUsuario.test("Enzo_123")) 
// console.log(validaNomeUsuario.test("En")) 
// console.log(validaNomeUsuario.test("Enzo_53241234124das")) 


// class Livro {
//   constructor(titulo, autor, disponivel) {
//     this.titulo = titulo
//     this.autor = autor
//     this.disponivel = disponivel
//   }

//   emprestar() {
//     if(this.disponivel === true) {
//       console.log("O livro foi emprestado!")
//       this.disponivel = false
//     } else {
//       console.log("O livro não está disponível para empréstimo.")
//     }
//   }

//   devolver() {
//     if(!this.disponivel) {
//       console.log("O livro já está disponível.")
//       this.disponivel = true
//     } else {
//       console.log("O livro não foi emprestado ainda!")
//     }
//   }

//   consultarDisponibilidade() {
//     if(this.disponivel){
//       return "Disponível"
//     } else {
//       return "Indisponível"
//     }
//   }
// }

// let livro1 = new Livro("O Livro", "Enzo", true)
// console.log(livro1)
// livro1.emprestar()
// console.log(livro1)
// livro1.devolver()
// console.log(livro1)
// console.log(livro1.consultarDisponibilidade())



// class Voo {
//   constructor(codigoVoo, origem, destino, assentosDisponiveis){
//     this.codigoVoo = codigoVoo
//     this.origem = origem
//     this.destino = destino
//     this.assentosDisponiveis = assentosDisponiveis
//   }

//   reservarAssento() {
//     if(this.assentosDisponiveis > 0) {
//       this.assentosDisponiveis--
//     } else {
//       console.log("Não há assentos disponíveis")
//     }
//   }

//   consultarAssentosDisponiveis() {
//     return this.assentosDisponiveis
//   }
// }

// let sP = new Voo(123,"Garanhuns","São Paulo", 10)
// console.log(sP)
// sP.reservarAssento()
// console.log(sP)



// class ContaBancaria {
//   constructor(numeroConta,saldo){
//     this.numeroConta = numeroConta
//     this.saldo = saldo
//   }

//   depositar(valor) {
//     this.saldo += valor
//   }

//   sacar(valor) {
//     if(valor <= this.saldo){
//       this.saldo -= valor
//     } else {
//       console.log("Saldo insuficiente")
//     }
//   }

//   consultarSaldo() {
//     return this.saldo
//   }
// }




// class Retangulo {
//   constructor(largura,altura) {
//     this.largura = largura
//     this.altura = altura
//   }

//   calcularArea() {
//     return this.altura * this.altura
  
//   }

//   calcularPerimetro() {
//     return 2 * (largura + altura)
//   }
// }






// class WordCounter {
//   constructor(){}

//   countWords(word){
//     let palavraDividida = word.split(/\s/g)
//     let semEspaco = []
//     // console.log(palavraDividida)
//     for(let i in palavraDividida){
//       if(palavraDividida[i] !== '') {
//         semEspaco.push(palavraDividida[i])
//       }
//     }
//     return semEspaco.length
//   }
// }

// let palavraContada = new WordCounter()
// console.log(palavraContada.countWords(" subi no onibus"))




// function removeDuplicates(arr){
//   let uniques = []
//   for(let i = 0;i<arr.length;i++){
//     uniques.push(arr[i])
//     if(uniques.indexOf(arr[i]) !== uniques.lastIndexOf(arr[i])){
//       uniques.pop();
//     }
//   }
//   console.log(uniques)
// }

// let array = [1,3,1,2,4,4,3,5]
// removeDuplicates(array)
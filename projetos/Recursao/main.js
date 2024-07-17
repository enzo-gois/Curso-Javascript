function retornarNumeroPar(n) {
  if(n % 2 == 0){
    console.log("O numero " + n + " é PAR")
  } else {
    console.log(n)
    retornarNumeroPar(n - 1)
  }
}

retornarNumeroPar(5)
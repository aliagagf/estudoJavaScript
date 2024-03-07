let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function compare (numero, string){
  if(numero == string){
    if (typeof numero === typeof string)
      console.log('As variáveis tem o mesmo valor e mesmo tipo');
    else
      console.log('As variáveis tem o mesmo valor e tipos diferentes');
  }
  else{
    if (typeof numero === typeof string)
      console.log('As variáveis tem valores diferentes e mesmo tipo');
    else
      console.log('As variáveis tem valores diferentes e tipos diferentes');
  }
}

compare (numeroUm, stringUm)
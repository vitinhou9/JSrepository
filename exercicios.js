
function soma(a, b) {
  return(a+b)
  }
  function multiplicacao(a, b) {
    return(a*b)
  }
  function divisao(a, b) {
    return(a/b)
  }
  function subtracao(a, b) {
    return(a-b)
  }
  
  function modulo(a,b) {
    return (a%b)
  }
  function max(a, b) {
    if(a>b)
    return (a);
    else if(a<b)
    return (b)
  }
  function strConcat(a, b) {
    let concat = (a+" "+b)
   return(concat)
  }
  function retornaNumero(numero) {
   if(numero>10)
   return("Maior que 10")
    else if(numero==10)
   return("Igual a 10")
  else if (numero<10)
    return("Menor que 10")
  }
  function ehPositivo(num) 
  {
  if (num>0)
  return(true);
  else if(num<=0)
  return(false)
  }
  
   
  
  
  module.exports = 
  { 
   soma,
   multiplicacao,
   divisao,
   subtracao,
   modulo,
   max,
   strConcat,
   retornaNumero,
   ehPositivo
  };
  
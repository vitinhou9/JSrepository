function soma(a, b) {
  return a+b;
}
function multiplicacao(a, b) {
 return a*b;
}
function divisao(a, b) {
 return a/b;
}
function subtracao(a, b) {
 return a-b;
}
function modulo(a, b) {
 return a%b
}
function max(a, b) {
 if (a<b)
 {return a}
 else if (b>a)
{return b}
}
function strConcat(a, b) {
 return (a," ",b)
 
}
function retornaNumero(numero) {
 if (numero>10){return ("Maior que 10")}
 else if (numero=10) return("Igual a 10")
 else if (numero<10) retorn("Menor que 10")
}
function ehPositivo(num) {
 if(number>=0);true
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

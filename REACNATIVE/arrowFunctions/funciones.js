/*ejecutarSumar = function(){

   let valor1 =  recuperarTexto("txtValor1");
   let valor2 =  recuperarTexto("txtValor2");

   console.log("VALOR1>>>>"+valor1+" Valor2>>>"+valor2)
   let suma = valor1 + valor2;
   

}*/

ejecutarSumar = () => {
    let valor1 =  recuperarEntero("txtValor1");
   let valor2 =  recuperarEntero("txtValor2");
    let resultadoSuma;
   console.log("VALOR1>>>>"+valor1+" Valor2>>>"+valor2)
   resultadoSuma=sumar(valor1,valor2);
   console.log(resultadoSuma)

}

ejecutarResta = () =>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultadoResta;
    resultadoResta=restar(valor1,valor2);
    console.log(resultadoResta);

}
sumar = (sum1,sum2) => {
    let suma;
    suma = sum1 + sum2;
    return suma;

}

restar = (num1,num2) => {
    let resta;
    resta= num1-num2;
    return resta;

}
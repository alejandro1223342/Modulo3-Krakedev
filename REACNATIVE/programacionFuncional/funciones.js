/*ejecutarSumar = function(){

   let valor1 =  recuperarTexto("txtValor1");
   let valor2 =  recuperarTexto("txtValor2");

   console.log("VALOR1>>>>"+valor1+" Valor2>>>"+valor2)
   let suma = valor1 + valor2;
   

}*/
/*
ejecutarSumar = () => {
    let valor1 =  recuperarEntero("txtValor1");
   let valor2 =  recuperarEntero("txtValor2");
    let resultadoSuma;
   console.log("VALOR1>>>>"+valor1+" Valor2>>>"+valor2)
   resultadoSuma=sumar(valor1,valor2);
   console.log(resultadoSuma)
   ejecutarOperacion(sumar);

}*/

/*ejecutarResta = () =>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultadoResta;
    resultadoResta=restar(valor1,valor2);
    console.log(resultadoResta);

}*/

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

//PROGRAMACION FUNCIONAL

ejecutarOperacion = (operar) => {
    let valor1 =  recuperarEntero("txtValor1");
    let valor2 =  recuperarEntero("txtValor2");
    let resultado;
    resultado = operar(valor1,valor2);
    console.log(resultado);

}
//Pido como parametro una Función
ejecutar = (fn) => {
    console.log("Estoy ejecutando funciones..")
    fn();

}

imprimir = () => {
    console.log("Estoy Imprimiendo");
}

saludar = () =>{
    alert("APRENDIENDO PROGRA FUNCIONAL")
}

testEjecutar = () => {
    //Paso como parametro la funcion imprimir
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(() =>{
        alert("FUNCION ANONIMA")
    } );

}
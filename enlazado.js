var numbers=prompt("ingresar número de tarjeta"); /*coloque el prompt al principio porque primero lo coloque
                                                  dentro de la función, pero no lo mostraba, entonces probé 
                                                  en la consola y lo cambie hacia afuera de la función
                                                  */

function isValidCar(){
	
	var result=[];
	var result=numbers.reverse();//el reverse lo coloque porque sirve para invertir los elementos
	//tngo que multiplicar cada casilla par(luhn)
	for(var i=0; i<numbers.length; i++){ 
	if(result==""){ // puse "", porque el usuario no puede ingresar un campo vacío
	alert("tarjeta inválida");
}else{
	return alert("tarjeta válida");

}
}
}

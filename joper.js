
function sumar(){
	
	if ($('#valor1').val().length == 0)
	{
	alert("Ingrese el valor 1");
	return;
	}
	if ($('#valor2').val().length == 0)
	{
	alert("Ingrese el valor 2");
	return;
	}
	var num1=parseInt(document.getElementById('valor1').value);
	var num2=parseInt(document.getElementById('valor2').value);
	var suma=num1+num2;
	document.form.resultado.value=suma;
			
}

function restar(){
	if ($('#valor1').val().length == 0)
	{
	alert("Ingrese el valor 1");
	return;
	}
	if ($('#valor2').val().length == 0)
	{
	alert("Ingrese el valor 2");
	return;
	}
	var num1=parseInt(document.getElementById('valor1').value);
	var num2=parseInt(document.getElementById('valor2').value);
	var resta=num1-num2;
	document.form.resultado.value=resta;
}

function multiplicar(){
	if ($('#valor1').val().length == 0)
	{
	alert("Ingrese el valor 1");
	return;
	}
	if ($('#valor2').val().length == 0)
	{
	alert("Ingrese el valor 2");
	return;
	}
	var num1=parseInt(document.getElementById('valor1').value);
	var num2=parseInt(document.getElementById('valor2').value);
	var multiplicar=num1*num2;
	document.form.resultado.value=multiplicar;
}
function dividir(){
	if ($('#valor1').val().length == 0)
	{
	alert("Ingrese el valor 1");
	return;
	}
	if ($('#valor2').val().length == 0)
	{
	alert("Ingrese el valor 2");
	return;
	}
	var num1=parseInt(document.getElementById('valor1').value);
	var num2=parseInt(document.getElementById('valor2').value);
	var dividir=num1/num2;
	document.form.resultado.value=dividir;
}
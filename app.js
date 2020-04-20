var Calculadora = {
	op: false,
	op2:false,
	operador: "",
	i:0,
	botones: document.getElementsByTagName("img"),
	pantalla:document.getElementById("display"),
	revisar_pantalla: function(){

		if (Calculadora.pantalla.textContent=="0"){
				Calculadora.pantalla.textContent="";}
		if (Calculadora.pantalla.textContent.length>8){
			Calculadora.pantalla.innerHTML=Calculadora.pantalla.textContent.substr(0,8);}
		if (Calculadora.op==true){
			Calculadora.pantalla.textContent="";
			Calculadora.op=false;
			Calculadora.op2=false;
			}
		},

	revisar_tecla: function(tecla){
	
		switch(tecla){

				case "mas": resultado1 = parseFloat(Calculadora.pantalla.textContent);
							 Calculadora.operador ="+";
							 Calculadora.op=true;
							 break;

				case "menos": resultado1 = parseFloat(Calculadora.pantalla.textContent);
							 Calculadora.operador ="-";
							 Calculadora.op=true;	
							 break;

				case "por": resultado1 = parseFloat(Calculadora.pantalla.textContent);
							 Calculadora.operador ="x";
							 Calculadora.op=true;
							 break;

				case "dividido": resultado1 = parseFloat(Calculadora.pantalla.textContent);
							 Calculadora.operador ="/"
							 Calculadora.op=true;
							 ;break;

				case "igual": resultado2 = parseFloat(Calculadora.pantalla.textContent);
							 Calculadora.pantalla.textContent=Calculadora.producto(Calculadora.operador);
							 ;break;
				case "on":   Calculadora.pantalla.textContent="0";
							 ;break;
				case "punto":if(Calculadora.op2==false){Calculadora.pantalla.textContent+=".";
							 Calculadora.op2=true;}
							 ;break;
				case "sign": Calculadora.pantalla.textContent=(-1)*parseFloat(Calculadora.pantalla.textContent);
							 ;break;
				default : Calculadora.pantalla.textContent+=event.toElement.id;
			}
	
		},

	producto: function(operador){

	switch(operador){

		case "+": return(resultado1+resultado2);break;

		case "-": return(resultado1-resultado2);break;

		case "x": return(resultado1*resultado2);break;

		case "/": return(resultado1/resultado2);break;
	}
},

movimiento: function(){
	var objeto = this
	objeto.style.transform="scale(0.9,0.9)";
	setTimeout(function(){objeto.style.transform="scale(1,1)";},200);
	},

tamanho_pantalla: function(){
	if (Calculadora.pantalla.textContent.length>8){
			Calculadora.pantalla.innerHTML=Calculadora.pantalla.textContent.substr(0,8);}
},

inicializar: function(){
	for(i=0;i<Calculadora.botones.length;i++){
		Calculadora.botones[i].addEventListener('click',function(event){

			Calculadora.revisar_pantalla();
			Calculadora.revisar_tecla(event.toElement.id);
			Calculadora.movimento
			Calculadora.tamanho_pantalla();
			})}
}	
}


Calculadora.inicializar();

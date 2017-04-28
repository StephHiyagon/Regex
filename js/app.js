var inputs=document.getElementsByTagName('input');
var textarea=document.getElementsByTagName('textarea');
var nombre=document.getElementById('name');
var apellido=document.getElementById('lastname');
var dni=document.getElementById('dni');
var fecha=document.getElementById('edad');
var cel=document.getElementById('cel');
var tel=document.getElementById('tel');
var contrasena=document.getElementById('pass');
var repeat=document.getElementById('repeatpass');
var coment=document.getElementById('coment');
var check=document.getElementById('check');




function validaText(event){
  event.preventDefault();

  if(this.value==""){
      this.nextElementSibling.style.display="block";
    }else{
      this.nextElementSibling.style.display="none";
    }

  if(this.getAttribute("type")=="text"){
      var txt="";
      var separa=this.value.split(" ");
    	separa.forEach(function(e){
        return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
      var imp=txt.trim();
    	return this.value=imp;
    }
}



function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

function noPegar(){
  return false;
}

nombre.onkeypress=letras;
nombre.onpaste=noPegar;
apellido.onkeypress=letras;
apellido.onpaste=noPegar;


function numero(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var numeros="0123456789";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(numeros.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

dni.onkeypress=numero;
dni.onpaste=noPegar;

for(var i=0; i<2;i++){
  inputs[i].addEventListener('blur',validaText);
}

function validaDni(event){
  var tamdni=dni.value.split("").length;
  if(this.value=="" || tamdni != "8"){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[2].addEventListener('blur',validaDni);

cel.onkeypress=numero;

function validaCel(event){
  var arrcel=cel.value.split("");
  if(this.value=="" || arrcel.length != "9" || arrcel[0] != "9"){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[4].addEventListener('blur',validaCel);

fecha.onkeypress=numero;

function validaFecha(event){
  console.log(this.value);
  var fecha=this.value.split("-");
  var ano=fecha[0];
  var mes=fecha[1];
  var dia=fecha[2];
  console.log(fecha);
  var actual=new Date();
  var month = actual.getMonth()+1;
  var day = actual.getDate();
  var year = actual.getFullYear();
  console.log(year);
  var edadActual=(year - ano);
  var mesDif=month - mes;
  console.log(mesDif);
  var diaA=day - dia;
  console.log(diaA);
  if(edad.value=="" || edadActual<"18"){
    this.nextElementSibling.style.display="block";
  } else if( edadActual=="18" && mesDif<"0"){
    this.nextElementSibling.style.display="block";
  } else if (edadActual=="18" && mesDif=="0" && diaA<"0"){
    this.nextElementSibling.style.display="block";
  } else{
    this.nextElementSibling.style.display="none";
  }

}

inputs[3].addEventListener('blur',validaFecha);

tel.onkeypress=numero;

function validaTel(event){
  var tamtel=this.value.split("").length;
  console.log(tamtel);
  if(this.value=="" || tamtel > "10" || tamtel < "8"){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[5].addEventListener('blur',validaTel);

function validaPass(event){
  var tampass=this.value.split("").length;
  console.log(tampass);
  if(this.value=="" || tampass > "33" || tampass < "8"){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[6].addEventListener('blur',validaPass);

function validaRepeatPass(event){
  if(this.value=="" || this.value!=pass.value){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[7].addEventListener('blur',validaRepeatPass);

function validaComent(event){
  if(this.value==""){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

textarea[0].addEventListener('blur',validaComent);

function validaCheck(event){
  if(this.checked==""){
      this.nextElementSibling.style.display="block";

    }else{
      this.nextElementSibling.style.display="none";
    }
}

inputs[8].addEventListener('blur',validaCheck);

// function validaComplete(event){
//   if(nombre.value=="" || apellido.value==""){
//       this.nextElementSibling.style.display="block";
//
//     }else{
//       this.nextElementSibling.style.display="none";
//     }
// }
//
// inputs[9].addEventListener('blur',validaComplete);

window.onload=function(){
    // console.log("Hello!");
     //alert("quadrado");
 }
 
function assinar(){
     const select=document.querySelector("select");
     console.log(select.value); //valor que a pessoa selecioanou aula 08
     const mineral = select.value;
     if(mineral === "Quartzo"){
         window.location.href = "./páginas/quartzo.html"; //adicionar aqui a página do minearal selecionado
     } else if (mineral === "Corindon"){
         window.location.href ="./páginas/corindon.html";
    } else if (mineral === "Hematita"){
         window.location.href ="./páginas/hematita.html";
    } else if (mineral === "Pirita"){
        window.location.href ="./páginas/pirita.html";
     } else{
         alert("selecione uma opção");
     }
 }

 document.getElementById("titulo").animate([
    // keyframes
    { transform: 'translateY(0px)' }, 
    { transform: 'translateY(-300px)' }
  ], { 
    // timing options
    duration: 500,
    iterations: 1
  });

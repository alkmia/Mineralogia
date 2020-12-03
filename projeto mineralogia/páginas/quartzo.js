window.onload=function(){
   // console.log("Hello!");
    //alert("quadrado");
}

function assinar(){
    const select=document.querySelector("select");
    console.log(select.value); //valor que a pessoa selecioanou aula 08
    const mineral = select.value;
    if(mineral === "Quartzo"){
        window.location.href = "quartzo.html"; //adicionar aqui a página do minearal selecionado
    } else if (mineral === "Corindon"){
        window.location.href ="corindon.html";
   } else if (mineral === "Hematita"){
        window.location.href ="hematita.html";
   } else if (mineral === "Pirita"){
       window.location.href ="pirita.html";
    } else{
        alert("selecione uma opção");
    }
}


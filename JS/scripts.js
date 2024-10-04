let contador =1;
document.getElementById("radio1").checked =true;

setInterval(() =>  {
correimagem();
},5000);

function correimagem(){
    contador++;

    if(contador > 4){
        contador =1;
    }
    document.getElementById("radio" +contador).checked =true;

}
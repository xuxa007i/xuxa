function tocaSom(idElementoAudio){
 document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');

let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTeclas.leigth) {
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;
}










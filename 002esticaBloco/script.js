var largura = 0;
function esticaBloco(){
    const bloco = document.getElementById('bloco');
    largura += 100;
    bloco.style.width = `${largura}px`;
    bloco.innerHTML = largura;

    if( largura >= 1400){
        bloco.style.background = 'red';
        bloco.innerHTML = '<strong>ESTOUROU</strong>';
    }
}


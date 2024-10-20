var largura = 0;
function esticaBloco(){
    const bloco = document.getElementById('bloco');
    largura += 100;
    bloco.style.width = `${largura}px`;
}


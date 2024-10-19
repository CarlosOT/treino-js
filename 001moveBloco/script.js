var mover = 10;
function moveBloco(){
    const bloco = document.getElementById('bloco');
    const contaMovimento = document.getElementById('contaMovimento');
    
    moverString = `${mover}%`;
    contaMovimento.innerHTML = moverString;
    bloco.style.marginLeft = moverString;

    if(moverString >= '80%'){
        mover = 0;
    }else{
        mover += 10;
    }

}
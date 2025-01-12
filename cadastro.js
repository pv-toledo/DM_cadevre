let dataNascimento = document.querySelector('#data_nasc');



dataNascimento.addEventListener('input', function (e) {


    let dnasc = dataNascimento.value.replace(/\D/g, ''); //essencial para retirar a barra que a formatação coloca, para que os condicionais sejam executados

    if (e.inputType === 'deleteContentBackward') {
        return;
    } //se o usuário apagar com backspace o return interrompe a função (impede que o restante do código seja executado), permitindo que o usuário apague a data sem problemas com a formatação ser mantida

    if (dnasc.length <= 2) {
        dataNascimento.value = dnasc;
    } else if (dnasc.length <= 3) {
        dataNascimento.value = `${dnasc.slice(0, 2)}/${dnasc.slice(2)}`;
    } else {
        dataNascimento.value = `${dnasc.slice(0, 2)}/${dnasc.slice(2, 4)}/${dnasc.slice(4, 8)}`
    }
})
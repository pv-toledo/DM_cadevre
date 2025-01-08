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

let celNumero = document.querySelector('#tel');

celNumero.addEventListener('input', function (e) {

    setTimeout(() => { //esperar o navegador processar a digitação antes de formatar o campo (bug que acontece quando usa o código no celular)

        let num = celNumero.value.replace(/\(|\)/g, '')

        if (e.inputType === 'deleteContentBackward') {
            return;
        }

        if (num.length <= 2) {
            celNumero.value = `(${num.slice(0, 2)})`;
        }
    }, 0);
})
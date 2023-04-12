async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error("CEP inválido");
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;

    } catch (erro) {
        console.log(erro);
    }    
}

//exemplo de uso do Promise.all
let = ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));


//exemplo de uso de fetch sem metodo async
 /*var consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error("CEP inválido");
        } else 
            console.log(r)
        })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Busca finalizada"));

console.log(consultaCep);*/

/* var consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error("CEP inválido");
        } else 
            console.log(r)
        })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Busca finalizada"));

console.log(consultaCep); */

async function buscaEndereco() {

    try {
        var consultaCep = await fetch("https://viacep.com.br/ws/01001250/json/");
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error("CEP inválido");
        }
        console.log(consultaCepConvertida);
        
    } catch (erro) {
        console.log(erro);
    }
    
}

buscaEndereco();
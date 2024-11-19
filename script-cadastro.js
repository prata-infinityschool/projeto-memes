async function cadastrarMeme() {
    const url = 'https://670edf663e7151861656043e.mockapi.io/api/memes'

    const linkDigitado = document.querySelector('#linkImagem').value
    const tituloDigitado = document.querySelector('#titulo').value
    let dadosMeme = {
        linkImagem: linkDigitado,
        dataCadastro: new Date(),
        titulo: tituloDigitado,
        likes: 0
    }
    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosMeme)
    })
    alert('Meme cadastrado com sucesso!')
}
// Quem terminou, abrir a aula de métodos HTTP e ir em POST e tentar fazer o POST sozinhos


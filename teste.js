function teste() {
    fetch('http://www.omdbapi.com/?apikey=42664b20&s=batman+the+dark+knight')
    .then(result => result.json())
    .then(json => {
        const listaFilmes = json['Search']
        for (inicio = 0; inicio < listaFilmes.length; inicio++) {
            const novoElemento = document.createElement('p');
            novoElemento.setAttribute('id', `nome-${inicio}`)
            const div = document.getElementById('div');
            div.appendChild(novoElemento);
            document.getElementById(`nome-${inicio}`).innerHTML ='Nome: '+ listaFilmes[inicio]['Title'];
        }
    })
}
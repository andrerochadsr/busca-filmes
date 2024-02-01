/*function filme() {
    fetch('http://www.omdbapi.com/?apikey=42664b20&s=batman+the+dark+knight')
    .then(result => result.json())
    .then(json => {
        const listaFilmes = json['Search']
        console.log(listaFilmes.length);
        for (inicio = 0; inicio < listaFilmes.length; inicio++) {
            console.log(listaFilmes[inicio]['Title']);
            document.getElementById('filme-nome').innerHTML = 'Nome: ' + listaFilmes[inicio]['Title'];
            document.getElementById('filme-ano').innerHTML = 'Ano: ' + listaFilmes[inicio]['Year'];
            document.getElementById('filme-imdbid').innerHTML = 'ImdbID: ' + listaFilmes[inicio]['imdbID'];
        }
        console.log(listaFilmes);
    })
    //.then(json => console.log(json['Search'][0]['Title']))
    
    //console.log(filmejson);
    document.getElementById('filme-page').innerHTML = '';
};*/
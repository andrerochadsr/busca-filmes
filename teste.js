function teste() {
    const barraPesquisa = document.getElementById('barra-pesquisa').value;
    const formatado = barraPesquisa.replace(/ /g, '+');
    fetch(`http://www.omdbapi.com/?apikey=42664b20&s=${formatado}`)
    .then(result => result.json())
    .then(json => {
        if (json['Response'] == 'True') {
            const listaFilmes = json['Search'];
            console.log(listaFilmes)
            document.getElementById('div').innerHTML = '';
            const div = document.getElementById('div');
            //laço para criar novos parágrafos
            for (inicio = 0; inicio < listaFilmes.length; inicio++) {
                //cria um parágrafo para os nomes
                const novoElementoNome = document.createElement('p');
                //atribui um ID de acordo com a variavel INICIO
                novoElementoNome.setAttribute('id', `nome-${inicio}`)
                div.appendChild(novoElementoNome);
                document.getElementById(`nome-${inicio}`).innerHTML ='Nome: '+ listaFilmes[inicio]['Title'];

                //cria um parágrafo para os anos
                const novoElementoAno = document.createElement('p')
                //atribui im ID de acordo com a variavel INICIO
                novoElementoAno.setAttribute('id', `ano-${inicio}`)
                div.appendChild(novoElementoAno);
                document.getElementById(`ano-${inicio}`).innerHTML ='Ano: '+ listaFilmes[inicio]['Year'];
            }
        } else {
            document.getElementById('div').innerHTML = 'ERRO! Tente novamente.';
        }
    })
}
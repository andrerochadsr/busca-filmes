async function func() {
    const barraPesquisa = document.getElementById('barra-pesquisa').value;
    const formatado = barraPesquisa.trim().replace(/ /g, '+');
    const URL = await fetch(`https://www.omdbapi.com/?s=${formatado}&apikey=42664b20`);
    const json = await URL.json();
    if (json['Response'] == 'True') {
        const listaFilmes = json['Search'];
        document.getElementById('div').innerHTML = '';
        const div = document.getElementById('div');
        //laço para criar novos parágrafos
        for (inicio = 0; inicio < listaFilmes.length; inicio++) {
            //cria um container para inserir os filmes e dados.
            const novoElementoContainer = document.createElement('div');
            novoElementoContainer.setAttribute('class', 'container-filmes');
            div.appendChild(novoElementoContainer);


            //cria uma div para o poster
            const novoElementoIMG = document.createElement('img')
            //atribui a fonte da imagem
            novoElementoIMG.setAttribute('src', listaFilmes[inicio]['Poster']);
            //atribui o testo alternativo 
            novoElementoIMG.setAttribute('alt', `Poster ${listaFilmes[inicio]['Title']}`) 
            //atribui as dimensoes 
            novoElementoIMG.setAttribute('width', 153);
            novoElementoIMG.setAttribute('height', 232.8);
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoIMG);


            //cria um parágrafo para os nomes
            const novoElementoNome = document.createElement('p');
            //atribui um ID de acordo com a variavel INICIO
            novoElementoNome.setAttribute('id', `nome-${inicio}`);
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoNome);
            document.getElementById(`nome-${inicio}`).innerHTML ='Nome: '+ listaFilmes[inicio]['Title'];


            //cria um parágrafo para o ano
            const novoElementoAno = document.createElement('p');
            //atribui im ID de acordo com a variavel INICIO
            novoElementoAno.setAttribute('id', `ano-${inicio}`);
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoAno);
            document.getElementById(`ano-${inicio}`).innerHTML ='Ano: '+ listaFilmes[inicio]['Year'];


            //cria um parágrafo para os tipos (serie ou filme)
            const novoElementoTipo = document.createElement('p');
            novoElementoTipo.setAttribute('id', `tipo-${inicio}`);
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoTipo);
            document.getElementById(`tipo-${inicio}`).innerHTML ='Tipo: '+listaFilmes[inicio]['Type'];
        }
    } else {
        document.getElementById('div').innerHTML = 'ERRO! Tente novamente.';
    }
}
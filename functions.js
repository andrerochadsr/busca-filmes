async function func() {
    const barraPesquisa = document.getElementById('barra-pesquisa').value;
    const formatado = barraPesquisa.trim().replace(/ /g, '+');
    const URL = await fetch(`https://www.omdbapi.com/?s=${formatado}&apikey=42664b20`);
    const json = await URL.json();
    if (json.Response === 'True') {
        const listaFilmes = json.Search;
        document.querySelector('.compartimento-filmes').innerHTML = '';
        const compartimentoFilmes = document.querySelector('.compartimento-filmes');
        
        //laço para criar novos parágrafos
        for (inicio = 0; inicio < listaFilmes.length; inicio++) {

            //variaveis para as informações dos filmes e series
            const nome = listaFilmes[inicio].Title;
            const img = listaFilmes[inicio].Poster;
            const ano = listaFilmes[inicio].Year;
            const tipo = listaFilmes[inicio].Type;

            //cria um container para inserir os filmes e dados.
            const novoElementoContainer = document.createElement('div');
            novoElementoContainer.setAttribute('class', 'container-filmes');
            compartimentoFilmes.appendChild(novoElementoContainer);


            //cria uma div para o poster
            const novoElementoIMG = document.createElement('img')
            //atribui a fonte da imagem
            novoElementoIMG.setAttribute('src', img);
            //atribui o testo alternativo 
            novoElementoIMG.setAttribute('alt', `Poster ${nome}`) 
            //atribui as dimensoes 
            novoElementoIMG.setAttribute('width', 153);
            novoElementoIMG.setAttribute('height', 232.8);
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoIMG);


            //cria um parágrafo para os nomes
            const novoElementoNome = document.createElement('p');
            //atribui um ID de acordo com a variavel INICIO
            novoElementoNome.setAttribute('id', `nome-${inicio}`);
            novoElementoNome.setAttribute('class', 'p-filmes-conteudo')
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoNome);
            document.getElementById(`nome-${inicio}`).innerHTML ='Nome: '+ nome;


            //cria um parágrafo para o ano
            const novoElementoAno = document.createElement('p');
            //atribui im ID de acordo com a variavel INICIO
            novoElementoAno.setAttribute('id', `ano-${inicio}`);
            novoElementoAno.setAttribute('class', 'p-filmes-conteudo')
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoAno);
            document.getElementById(`ano-${inicio}`).innerHTML ='Ano: '+ ano;


            //cria um parágrafo para os tipos (serie ou filme)
            const novoElementoTipo = document.createElement('p');
            novoElementoTipo.setAttribute('id', `tipo-${inicio}`);
            novoElementoTipo.setAttribute('class', 'p-filmes-conteudo')
            //insere o elemento no container dos filmes
            novoElementoContainer.appendChild(novoElementoTipo);
            document.getElementById(`tipo-${inicio}`).innerHTML ='Tipo: '+ tipo;

            
            //cria um parágrafo para inserir o link
            const novoElementoDivLink = document.createElement('p')
            novoElementoDivLink.setAttribute('id', `link-p-${inicio}`);
            novoElementoDivLink.setAttribute('class', 'p-filmes-conteudo')

            //cria um link de pesquisa
            const novoElementoLink = document.createElement('a');
            novoElementoLink.setAttribute('id', `link-${inicio}`);
            novoElementoLink.setAttribute('class', 'link-search');

            novoElementoLink.setAttribute('href', `https://www.google.com/search?q=${nome}+${ano}+${tipo}`);
            novoElementoLink.setAttribute('target', '_blank');

            
            novoElementoLink.setAttribute('rel', 'external');

            novoElementoDivLink.appendChild(novoElementoLink);
            novoElementoContainer.appendChild(novoElementoDivLink);
            document.getElementById(`link-${inicio}`).innerHTML = 'Search';
        }
    } else {
        document.querySelector('.erro-resposta h2').innerHTML = 'ERRO! Tente novamente.';
    }
}
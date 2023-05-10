import { conectaApi } from './conectaApi.js';
import constroiCard from './mostraVideos.js';

async function buscarVideos(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideos(dadosPesquisa);
    const lista = document.querySelector('[data-lista]')
    
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse nome</h2> `
    }
}


const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento => buscarVideos(evento))
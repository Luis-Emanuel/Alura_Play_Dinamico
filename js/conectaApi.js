async function listaVideos() {
  const conexao = await fetch("https://alura-play-dinamico-api.vercel.app/videos")
  const conexaoConvertida = await conexao.json()
  return conexaoConvertida;
}

async function criaVideos(titulo, descricao, url, imagem){
  const conexao = await fetch("https://alura-play-dinamico-api.vercel.app/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualisações`  ,
      url: url,
      imagem: imagem
    })
  })

  if(!conexao.ok){
    throw new Error("Não foi possivel enviar o vídeo")
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida
}

async function buscaVideos(termoDeBusca){
  const conexao = await fetch( `https://alura-play-dinamico-api.vercel.app/videos?q=${termoDeBusca}`)
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida
}

export const conectaApi = {
  listaVideos,
  criaVideos,
  buscaVideos
}

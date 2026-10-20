const dados = {
  times: [
    { id: 1, nome: "Los Angeles Lakers", cidade: "Los Angeles", conferencia: "Oeste", arena: "Crypto.com Arena", titulos: 17, fundacao: 1947, descricao: "Um dos times mais tradicionais da NBA, com 17 títulos de campeonato.", destaque: true, imagemPrincipal: "img/lakers.png" },
    { id: 2, nome: "Golden State Warriors", cidade: "San Francisco", conferencia: "Oeste", arena: "Chase Center", titulos: 7, fundacao: 1946, descricao: "Conhecido pelo estilo de jogo rápido e pelos recordes de bolas de 3 pontos.", destaque: true, imagemPrincipal: "img/warriors.png" },
    { id: 3, nome: "Boston Celtics", cidade: "Boston", conferencia: "Leste", arena: "TD Garden", titulos: 18, fundacao: 1946, descricao: "Franquia com mais títulos da história da NBA.", destaque: true, imagemPrincipal: "img/celtics.png" },
    { id: 4, nome: "Chicago Bulls", cidade: "Chicago", conferencia: "Leste", arena: "United Center", titulos: 6, fundacao: 1966, descricao: "Ficou marcado pela dinastia de Michael Jordan nos anos 90.", destaque: false, imagemPrincipal: "img/bulls.png" },
    { id: 5, nome: "Miami Heat", cidade: "Miami", conferencia: "Leste", arena: "Kaseya Center", titulos: 3, fundacao: 1988, descricao: "Time conhecido pela defesa intensa e pela cultura vencedora.", destaque: false, imagemPrincipal: "img/heat.png" },
    { id: 6, nome: "Milwaukee Bucks", cidade: "Milwaukee", conferencia: "Leste", arena: "Fiserv Forum", titulos: 2, fundacao: 1968, descricao: "Campeão em 2021, liderado por Giannis Antetokounmpo.", destaque: false, imagemPrincipal: "img/bucks.png" }
  ],
  jogadores: [
    { id: 1, timeId: 1, nome: "LeBron James", posicao: "Ala", imagem: "img/lebron.jpg" },
    { id: 2, timeId: 1, nome: "Anthony Davis", posicao: "Ala-pivô", imagem: "img/davis.jpg" },
    { id: 3, timeId: 1, nome: "Austin Reaves", posicao: "Armador", imagem: "img/reaves.jpg" },
    { id: 4, timeId: 2, nome: "Stephen Curry", posicao: "Armador", imagem: "img/curry.jpg" },
    { id: 5, timeId: 2, nome: "Draymond Green", posicao: "Ala-pivô", imagem: "img/green.jpg" },
    { id: 6, timeId: 2, nome: "Andrew Wiggins", posicao: "Ala", imagem: "img/wiggins.jpg" },
    { id: 7, timeId: 3, nome: "Jayson Tatum", posicao: "Ala", imagem: "img/tatum.jpg" },
    { id: 8, timeId: 3, nome: "Jaylen Brown", posicao: "Ala", imagem: "img/brown.jpg" },
    { id: 9, timeId: 3, nome: "Kristaps Porzingis", posicao: "Pivô", imagem: "img/porzingis.jpg" },
    { id: 10, timeId: 4, nome: "Zach LaVine", posicao: "Ala", imagem: "img/lavine.jpg" },
    { id: 11, timeId: 4, nome: "Nikola Vucevic", posicao: "Pivô", imagem: "img/vucevic.jpg" },
    { id: 12, timeId: 4, nome: "Coby White", posicao: "Armador", imagem: "img/white.jpg" },
    { id: 13, timeId: 5, nome: "Jimmy Butler", posicao: "Ala", imagem: "img/butler.jpg" },
    { id: 14, timeId: 5, nome: "Bam Adebayo", posicao: "Pivô", imagem: "img/adebayo.jpg" },
    { id: 15, timeId: 5, nome: "Tyler Herro", posicao: "Armador", imagem: "img/herro.jpg" },
    { id: 16, timeId: 6, nome: "Giannis Antetokounmpo", posicao: "Ala-pivô", imagem: "img/antetokounmpo.jpg" },
    { id: 17, timeId: 6, nome: "Damian Lillard", posicao: "Armador", imagem: "img/lillard.jpg" },
    { id: 18, timeId: 6, nome: "Khris Middleton", posicao: "Ala", imagem: "img/middleton.jpg" }
  ]
};
function formatarTitulos(time){
  return time.titulos + (time.titulos === 1 ? " título" : " títulos");
}
function criarSlideCarousel(time, index) {
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  if (index === 0) item.classList.add("active");
  item.innerHTML = `
    <img src="${time.imagemPrincipal}" class="d-block w-100" alt="${time.nome}" style="max-height:350px;object-fit:contain;background:#f5f5f5;">
    <div class="carousel-caption">
      <h5>${time.nome}</h5>
      <p>${time.descricao}</p>
    </div>
  `;
  item.style.cursor = "pointer";
  item.addEventListener("click", function (){
    window.location.href = "detalhes.html?id=" + time.id;
  });
  return item;
}
function criarIndicador(index){
  const botao = document.createElement("button");
  botao.setAttribute("type", "button");
  botao.setAttribute("data-bs-target", "#carouselDestaques");
  botao.setAttribute("data-bs-slide-to", index);
  if (index === 0){
    botao.classList.add("active");
  }
  return botao;
}
function renderCarousel(){
  const itensContainer = document.getElementById("carouselItens");
  if (!itensContainer) return;
  const indicadoresContainer = document.getElementById("carouselIndicadores");
  const destaques = dados.times.filter(function (time){
    return time.destaque === true;
  });
  itensContainer.innerHTML = "";
  indicadoresContainer.innerHTML = "";
  destaques.forEach(function (time, index){
    itensContainer.appendChild(criarSlideCarousel(time, index));
    indicadoresContainer.appendChild(criarIndicador(index));
  });
}
function criarCardTime(time){
  const col = document.createElement("div");
  col.classList.add("col-6", "col-md-4", "col-lg-3");
  col.innerHTML = `
    <div class="card h-100 time-card" style="cursor:pointer;">
      <img src="${time.imagemPrincipal}" class="card-img-top p-3" alt="${time.nome}" style="height:140px;object-fit:contain;">
      <div class="card-body">
        <h5 class="card-title">${time.nome}</h5>
        <p class="card-text text-muted">${time.cidade} - ${time.conferencia}</p>
      </div>
    </div>
  `;
  col.addEventListener("click", function (){
    window.location.href = "detalhes.html?id=" + time.id;
  });
  return col;
}
function renderTimes(){
  const container = document.getElementById("listaTimes");
  if (!container) return;
  container.innerHTML = "";
  dados.times.forEach(function (time) {
    container.appendChild(criarCardTime(time));
  });
}
renderCarousel();
renderTimes();
function pegarIdDaUrl(){
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}
function renderInfoTime() {
  const secao = document.getElementById("infoTime");
  if (!secao) return;
  const id = pegarIdDaUrl();
  const time = dados.times.find(function (t){
    return t.id === id;
  });
  if (!time){
    secao.innerHTML = "<p>Time não encontrado.</p>";
    return;
  }
  secao.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-md-4">
        <img src="${time.imagemPrincipal}" class="img-fluid" alt="${time.nome}">
      </div>
      <div class="col-md-8">
        <h1 class="h3">${time.nome}</h1>
        <p>${time.descricao}</p>
        <ul class="list-unstyled">
          <li><strong>Cidade:</strong> ${time.cidade}</li>
          <li><strong>Conferência:</strong> ${time.conferencia}</li>
          <li><strong>Arena:</strong> ${time.arena}</li>
          <li><strong>Títulos:</strong> ${formatarTitulos(time)}</li>
          <li><strong>Fundação:</strong> ${time.fundacao}</li>
        </ul>
      </div>
    </div>
  `;
}
function criarFotoJogador(jogador){
  const div = document.createElement("div");
  div.classList.add("text-center", "jogador-item");
  div.innerHTML = `
    <img src="${jogador.imagem}" class="rounded jogador-foto" alt="${jogador.nome}">
    <p class="mt-2 mb-0 small">${jogador.nome}</p>
    <p class="text-muted small">${jogador.posicao}</p>
  `;
  return div;
}
function renderJogadores(){
  const container = document.getElementById("listaJogadores");
  if (!container) return;
  const id = pegarIdDaUrl();
  const jogadoresDoTime = dados.jogadores.filter(function (jogador){
    return jogador.timeId === id;
  });
  container.innerHTML = "";
  jogadoresDoTime.forEach(function (jogador){
    container.appendChild(criarFotoJogador(jogador));
  });
}
renderInfoTime();
renderJogadores();
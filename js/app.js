function alterarStatus(num) {
  let botaoClicado = document.getElementById(`game-${num}`);
  let fotoJogo = botaoClicado.querySelector(".dashboard__item__img");
  let botaoJogo = botaoClicado.querySelector(".dashboard__item__button");

  if (fotoJogo.classList.contains("dashboard__item__img--rented")) {
    fotoJogo.classList.remove("dashboard__item__img--rented");
    botaoJogo.classList.remove("dashboard__item__button--return");
    botaoJogo.innerHTML = "Devolver";
  } else {
    fotoJogo.classList.add("dashboard__item__img--rented");
    botaoJogo.classList.add("dashboard__item__button--return");
    botaoJogo.innerHTML = "Alugar";
  }
}

//querySelector é utilizado para selecionar elementos HTML com base em seu id, classes, tipos, atributos e etc...

//verificar indentificadores dos itens

//getElementById busca uma tag pelo ID - é utilizado o querySelector para buscar algo dentro dessa tag,

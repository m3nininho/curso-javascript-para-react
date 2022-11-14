import "./style.css";

function CardGame(icon = "interrogation", alt = "interrogation em pixel art") {
  return /*html*/ `
    <div class="container">
      <article class="card-game">
        <img class="interrogation" src="./images/${icon}.svg" alt="${alt}">
      </article>
    </div>
  `;
}

export default CardGame;

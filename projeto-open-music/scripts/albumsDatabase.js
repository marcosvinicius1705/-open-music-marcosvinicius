
async function fetchMusics() {
    const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
    const data = await response.json();
    console.log(data);
    return data;
}

const albumsContainer = document.querySelector(".albumsContainer");

function createCard({ img, title, genre, band, price }) {
    // Criação do card
    const card = document.createElement("div");
    card.classList.add("card");

    // Adiciona a imagem
    const image = document.createElement("img");
    image.src = img; // Usa o parâmetro correto
    image.alt = `Capa do álbum ${title}`;
    card.appendChild(image);

    // Conteúdo do card
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Título do álbum
    const titleElement = document.createElement("h3");
    titleElement.classList.add("title");
    titleElement.textContent = title;
    cardContent.appendChild(titleElement);

    // Banda e gênero
    const paragraph1 = document.createElement("div");
    paragraph1.classList.add("card-paragraph");

    const bandElement = document.createElement("p");
    bandElement.classList.add("artist");
    bandElement.textContent = band;

    const genreElement = document.createElement("p");
    genreElement.classList.add("genre");
    genreElement.textContent = genre;

    paragraph1.appendChild(bandElement);
    paragraph1.appendChild(genreElement);
    cardContent.appendChild(paragraph1);

    // Preço e botão
    const paragraph2 = document.createElement("div");
    paragraph2.classList.add("card-paragraph");

    const priceElement = document.createElement("p");
    priceElement.classList.add("price");
    priceElement.innerHTML = `<strong>R$ ${price}</strong>`;

    const button = document.createElement("button");
    button.classList.add("buy-button");
    button.textContent = "Comprar";

    paragraph2.appendChild(priceElement);
    paragraph2.appendChild(button);
    cardContent.appendChild(paragraph2);

    card.appendChild(cardContent);

    return card;
}

async function renderAlbums() {
    const musics = await fetchMusics(); // Busca os dados da API

    musics.forEach(album => {
        const card = createCard(album); // Cria um card para cada álbum
        albumsContainer.appendChild(card); // Adiciona o card ao container
    });
}

renderAlbums(); // Renderiza os álbuns na tela

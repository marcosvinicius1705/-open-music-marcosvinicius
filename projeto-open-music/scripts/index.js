
const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', function() {
        items.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});



function applyInputRangeStyle() {
  const inputRange = document.querySelector("#inputPrice");

  inputRange.addEventListener("input", (event) => {
    const currentInputValue = event.target.value;
    const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;

    inputRange.style.background = `linear-gradient(to right, var(--color-brand-1) ${runnableTrackProgress}%, var( --color-gray-5) ${runnableTrackProgress}%)`;

   
    document.querySelector(".price-number").textContent = `R$ ${currentInputValue}`;

    filterCardsByPrice(currentInputValue);
  });
}

function filterCardsByPrice(maxPrice) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const priceText = card.querySelector(".price strong").textContent; 
    const priceValue = parseFloat(priceText.replace("R$", "").replace(",", "."));

    if (priceValue <= maxPrice) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none";
    }
  });
}


function routine() {
  applyInputRangeStyle();
}
routine();




const cards = document.querySelector(".cards");

function GetData() {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    const data = response.data;

    data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
                    <div class="card-img"><img src="${item.image}"  /></div>
                    <div class="card-text">
                      <h3>${item.title}</h3>
                      <p><strong>$${item.price}</strong></p>
                      <button class="btn">Add to Basket</button>
                    </div>`;

      const btn = div.querySelector(".btn");
        btn.addEventListener("click", () => {
          addBasket(item);
      });
      cards.appendChild(div);
    });
  });
}

function addBasket(item) {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
}

window.onload = () => {
  GetData();
};

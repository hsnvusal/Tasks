const items = document.querySelector(".cards");

function Show() {
  const mehsul = JSON.parse(localStorage.getItem("basket")) || [];
  mehsul.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div class="card-img"><img src="${item.image}"  /></div>
                    <div class="card-text">
                      <h3>${item.title}</h3>
                      <p><strong>$${item.price}</strong></p>
                      <button class="btn remove" data-id="${item.id}">Sil</button>
                    </div>`;

    const deletebtn = div.querySelector(".btn.remove");
    deletebtn.addEventListener("click", () => {
      deleteItemInBasket(item.id);
    });
    items.append(div);
  });
}

function deleteItemInBasket(id) {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  const index = basket.findIndex(item=>item.id ===id);
  if (index !==-1)   {
    basket.splice(index,1)
  }

  // basket = basket.filter(item => item.id !== id);
  localStorage.setItem("basket", JSON.stringify(basket));
  location.reload();
}

window.onload = Show;

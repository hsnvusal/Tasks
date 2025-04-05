const categories = document.querySelector(".categories");
const categoryName = document.getElementById("name");
const categoryDescription = document.getElementById("description");
const submitbtn = document.getElementById("submit");


function GetData() {
  axios.get("https://northwind.vercel.app/api/categories").then((response) => {
    const data = response.data;

    localStorage.setItem("categories", JSON.stringify(data));

    data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("categories-item");
      div.innerHTML = `
                <h3>${item.name}</h3>
                <h5>${item.description}</h5>
                <button class="btn remove" data-id="${item.id}">Delete</button>
                <button class="btn edit" data-id="${item.id}">Edit</button>
            `;
      const btn = div.querySelector(".btn.remove");
      btn.addEventListener("click", () => {
        deleteItem(item.id);
      });
      const editBtn = div.querySelector(".btn.edit");
      editBtn.addEventListener("click",() => {
        editItem(item.id);
      })
      categories.append(div);
    });
  });
}

function deleteItem(id) {
  axios.delete(`https://northwind.vercel.app/api/categories/${id}`).then(() => {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories = categories.filter((item) => item.id !== id);
    localStorage.setItem("categories", JSON.stringify(categories));
    location.reload();
  });
}

function editItem(id) {
  let categories = JSON.parse(localStorage.getItem("categories")) || [];
  const data = categories.find(item=>item.id ===id);
  let newName = prompt("Yeni Ad: ",data.name);
  let newDescription = prompt("Yeni Aciklama: ",data.description);
  data.name = newName;
  data.description = newDescription;
  localStorage.setItem("categories", JSON.stringify(categories));

  axios.put(`https://northwind.vercel.app/api/categories/${data.id}`, {
    name:newName,
    description: newDescription,
  }).then(()=> {
    location.reload();
  })


  
}

submitbtn.addEventListener("click", () => {
  const name = categoryName.value;
  const description = categoryDescription.value;
  addDataInApi(name, description);
});

function addDataInApi(name, description) {
  let data = {
    name: name,
    description: description,
  };

  axios
    .post("https://northwind.vercel.app/api/categories", data)
    .then(() => {
      categoryName.value = "";
      categoryDescription.value = "";
      location.reload();
    });
}

window.onload = GetData;

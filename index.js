const data = [
    {
      id: 1,
      name: "Cecilio Drum",
      img: "https://m.media-amazon.com/images/I/81EReiM6O7L._AC_SX679_.jpg",
      price: 185,
      cat: "Drum Set",
    },
    {
      id: 11,
      name: "Bass Drum",
      img: " https://imgs.search.brave.com/diUT9YGnFESEV5zk4JVXSqKqZ4NESAz8VIb7wp5J5OQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aGVk/cnVtbmluamEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAxL0Jhc3MtRHJ1/bS5qcGc ",
      price: 75,
      cat: "Drum components",
    },
    {
      id: 2,
      name: "Snare Drum",
      img: "https://imgs.search.brave.com/acW-dsHrldsoASmFenzpyuaZWTwU4CGpFNwCP8jjXTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzYw/NjcyN2Q3LTNmMDUt/NGI3NC04NTUyLWUw/MTFkOTY1MjIwOS5f/X0NSMCwwLDIwMDAs/MjAwMF9QVDBfU1gz/MDBfVjFfX18uanBn",
      price: 85,
      cat: "Drum components",
    },
    {
      id: 3,
      name: " Meinl 19' Crash Cymbal",
      img: "https://m.media-amazon.com/images/I/A1QsyoE49sS._AC_SX679_.jpg",
      price: 120,
      cat: "Cymbal",
    },
    {
      id: 4,
      name: "Cecilio Drum 2 ",
      img: "https://m.media-amazon.com/images/I/719Mv3BxWsL._AC_SX679_.jpg",
      price: 200,
      cat: "Drum Set",
    },
    {
      id: 5,
      name: "Arborea Crash Cymbal ",
      img: "https://m.media-amazon.com/images/I/714bXf7FCRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 150,
      cat: "Cymbal",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();
  var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

import "../assets/style.css";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// search results - warning! this function takes array as a parameter

const searchReasultsBox = document.getElementById("search-results");

const setResults = searchResults => {
  searchReasultsBox.innerHTML = null;
  searchResults.map(result => {
    const {
      name,
      image_url,
      abv,
      ibu,
      tagline,
      description,
      food_pairing
    } = result;

    const searchResultItem = document.createElement("li");
    const foodPairingList = document.createElement("ul");
    const foodPairingListTitle = document.createElement("p");
    const searchResultContent = `
            <img id="beer-img" src= ${image_url} height="200" />
            <h3 id="title">${name}</h3>
            <p id="abv">ABV: ${abv}</p>
            <p id="ibu">IBU: ${ibu}</p>            
            <p id="tagline">Tagline: ${tagline}</p>
            <p id="description">Description: ${description}</p>
        `;
    // height is added only for now (waiting for styling)
    foodPairingListTitle.innerText = "Food pairing";
    foodPairingList.id = "food-pairing";
    food_pairing.map(food => {
      const foodItem = document.createElement("li");
      foodItem.innerText = food;
      foodPairingList.appendChild(foodItem);
    });

    searchResultItem.innerHTML = searchResultContent;
    searchReasultsBox.appendChild(searchResultItem);
    searchReasultsBox.appendChild(foodPairingList);
    searchReasultsBox.insertBefore(foodPairingListTitle, foodPairingList);
  });
};

//Searching by description

const searchByDescriptionInput = document.getElementById(
  "search-by-description-input"
);
const searchByDescriptionBtn = document.getElementById(
  "search-by-description-btn"
);

searchByDescriptionBtn.addEventListener("click", () =>
  fetchBeers(searchByDescriptionInput.value)
);

function fetchBeers(beerProperty) {
  fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let results = [];
      data.filter(beer => {
        const description = beer.description.toLowerCase();
        if (description.includes(beerProperty.toLowerCase())) {
          results.push(beer);
        }
      });
      setResults(results); // WARNING! this function will be added in PR about setting search results
    })
    .catch(error => {
      console.log("Błąd!", error);
    });
}

// this fetch is needed in searching by name

//  choosenBeerName - name put in input by user

function fetchBeerByName(choosenBeerName) {
  fetch(`https://api.punkapi.com/v2/beers?beer_name=${choosenBeerName}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //add here what we want to do with data
    })
    .catch(error => {
      console.log("Błąd!", error);
    });
}

// this fetch is needed in searching by abv

//  choosenMinAbvValue - choosen min abv value, choosenMaxAbvValue - choosen max abv value

function fetchBeerByAbv(choosenMinAbvValue, choosenMaxAbvValue) {
  fetch(
    `https://api.punkapi.com/v2/beers?abv_gt=${choosenMinAbvValue}&abv_lt=${choosenMaxAbvValue}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //add here what we want to do with data
    })
    .catch(error => {
      console.log("Błąd!", error);
    });
}

// this fetch is needed in searching by ibu

//  choosenMinIbuValue - choosen min ibu value, choosenMaxIbuValue - choosen max ibu value

function fetchBeerByIbu(choosenMinIbuValue, choosenMaxIbuValue) {
  fetch(
    `https://api.punkapi.com/v2/beers?ibu_gt=${choosenMinIbuValue}&ibu_lt=${choosenMaxIbuValue}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //add here what we want to do with data
    })
    .catch(error => {
      console.log("Błąd!", error);
    });
}

// slider

class Slider {
  constructor() {
    this.init();
  }

  async fetchRandomBeer() {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers/random");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Error!", error);
    }
  }

  async getBeersForSlider() {
    const beers = [];
    for (let i = 0; i < 3; i++) {
      const beer = await this.fetchRandomBeer();
      beers.push(...beer);
    }
    return beers;
  }

  async setSliderContent(beers) {
    const slides = document.querySelectorAll(".slider__item-content");
    slides.forEach((slide, i) => {
      const frag = document.createDocumentFragment();

      const title = document.createElement("h2");
      title.innerText = beers[i].name;
      title.classList.add("slider__item-title");
      frag.appendChild(title);

      const subtitle = document.createElement("h3");
      subtitle.innerText = beers[i].tagline;
      subtitle.classList.add("slider__item-subtitle");
      frag.appendChild(subtitle);

      const description = document.createElement("p");
      description.innerText = beers[i].description;
      description.classList.add("slider__item-description");
      frag.appendChild(description);

      slide.appendChild(frag);
    });
  }

  showSlider() {
    $(document).ready(function() {
      $(".slider").slick({
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        dots: true
      });
    });
  }

  init() {
    this.getBeersForSlider()
      .then(beers => this.setSliderContent(beers))
      .then(() => this.showSlider());
  }
}

const slider = new Slider();

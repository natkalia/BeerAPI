import "../assets/style.css";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//this fetch is needed in slider

function fetchRandomBeer() {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //add here what we want to do with data
    }).catch(error => {
      console.log('Błąd!', error);
    });
};

//this fetch is needed in searching by description

function fetchBeers() {
  fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
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

function showSlider() {
  $(document).ready(function () {
    $(".slider").slick({
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      dots: true
    });
  });
}

showSlider();
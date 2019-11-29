// Imports for range sliders used in ABV, IBU search
import * as noUiSlider from 'nouislider/distribute/nouislider.js';
import 'nouislider/distribute/nouislider.css';

// search results - warning! this function takes array as a parameter

const searchReasultsBox = document.getElementById('search-results');


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

        const searchResultItem = document.createElement('li');
        const foodPairingList = document.createElement('ul');
        const foodPairingListTitle = document.createElement('p');
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
        food_pairing.map((food) => {
            const foodItem = document.createElement('li');
            foodItem.innerText = food;
            foodPairingList.appendChild(foodItem);
        });
        
        searchResultItem.innerHTML = searchResultContent;
        searchReasultsBox.appendChild(searchResultItem);
        searchReasultsBox.appendChild(foodPairingList);
        searchReasultsBox.insertBefore(foodPairingListTitle, foodPairingList);
    });
}

//this fetch is needed in slider

function fetchRandomBeer() {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json();
    })
    .then(data => { 
        console.log(data);
        //add here what we want to do with data
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

//Searching by description

const searchByDescriptionInput = document.getElementById('search-by-description-input');
const searchByDescriptionBtn = document.getElementById('search-by-description-btn');

searchByDescriptionBtn.addEventListener(
    'click', () => fetchBeers(searchByDescriptionInput.value)
);

function fetchBeers(beerProperty) {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let results = [];
        data.filter(beer => {
            const description = beer.description.toLowerCase();
            if(description.includes(beerProperty.toLowerCase())){
                results.push(beer);
            }
        })
        setResults(results); // WARNING! this function will be added in PR about setting search results
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

// this fetch is needed in searching by name

//  choosenBeerName - name put in input by user

function fetchBeerByName(choosenBeerName){
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${choosenBeerName}`)
    .then(response => {
        return response.json();
    })
    .then(data => { 
        console.log(data);
        //add here what we want to do with data
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

// Searching by ABV,IBU

// ABV, IBU search - get target elements to make range sliders
const rangeSliderAbvBar = document.getElementById('range-slider-abv__bar');
const rangeSliderAbvChoice = document.getElementById('range-slider-abv__choice');
const searchByAbvBtn = document.getElementById('search-by-abv__btn');
const rangeSliderIbuBar = document.getElementById('range-slider-ibu__bar');
const rangeSliderIbuChoice = document.getElementById('range-slider-ibu__choice');
const searchByIbuBtn = document.getElementById('search-by-ibu__btn');

// ABV, IBU search - create variables to store user input from range sliders
let choosenMinAbvValue, 
    choosenMaxAbvValue,
    choosenMinIbuValue,
    choosenMaxIbuValue;

// ABV, IBU search - create two range sliders
noUiSlider.create(rangeSliderAbvBar, {
  start: [3, 30],
  connect: true,
  range: {
    min: 0.5,
    max: 56
  },
  step: 0.5
});
noUiSlider.create(rangeSliderIbuBar, {
  start: [30, 530],
  connect: true,
  range: {
    min: 0,
    max: 1500
  },
  step: 1
});

// ABV, IBU search - create functions to show user search criteria next to range slider
function showUserAbvChoice(values) {
    values = values.map(element => {
        return element
            .substring(0, element.length-1)
            .concat('%');
    });
    values = values.join(' - ');
    rangeSliderAbvChoice.innerHTML = `Your choice: ${values}`;
}
function showUserIbuChoice(values) {
    values = values.map(element => {
        return element.substring(0, element.length-3);
    });
    values = values.join(' - ');
    rangeSliderIbuChoice.innerHTML = `Your choice: ${values}`;   
}

// ABV, IBU search - create function to get user input from range sliders to be used in fetch 
function getUserAbvInputs(values) {
    choosenMinAbvValue = values[0];
    choosenMaxAbvValue = values[1];
    return choosenMinAbvValue, choosenMaxAbvValue;
};
function getUserIbuInputs(values) {
    choosenMinIbuValue = values[0];
    choosenMaxIbuValue = values[1];
    return choosenMinIbuValue, choosenMaxIbuValue;
};

// ABV, IBU search - listen for update values on range slider, handle them 
rangeSliderAbvBar.noUiSlider.on('update', (values) => {
    showUserAbvChoice(values);
    getUserAbvInputs(values);
});
rangeSliderIbuBar.noUiSlider.on('update', (values) => {
    showUserIbuChoice(values);
    getUserIbuInputs(values);
});

// this fetch is needed in searching by abv

//  choosenMinAbvValue - choosen min abv value, choosenMaxAbvValue - choosen max abv value

function fetchBeerByAbv(choosenMinAbvValue, choosenMaxAbvValue){
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=${choosenMinAbvValue}&abv_lt=${choosenMaxAbvValue}`)
    .then(response => {
        return response.json();
    })
    .then(data => { 
        console.log(data);
        //add here what we want to do with data
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

// this fetch is needed in searching by ibu 

//  choosenMinIbuValue - choosen min ibu value, choosenMaxIbuValue - choosen max ibu value

function fetchBeerByIbu(choosenMinIbuValue, choosenMaxIbuValue){
    fetch(`https://api.punkapi.com/v2/beers?ibu_gt=${choosenMinIbuValue}&ibu_lt=${choosenMaxIbuValue}`)
    .then(response => {
        return response.json();
    })
    .then(data => { 
        console.log(data);
        //add here what we want to do with data
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

// ABV, IBU search - listen for user to click search button and call fetch functions 
searchByAbvBtn.addEventListener('click', () => fetchBeerByAbv(choosenMinAbvValue, choosenMaxAbvValue));
searchByIbuBtn.addEventListener('click', () => fetchBeerByIbu(choosenMinIbuValue, choosenMaxIbuValue));

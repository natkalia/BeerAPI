
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

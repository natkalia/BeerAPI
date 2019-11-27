// search results - warning! this function takes array as a parameter

const searchReasultsBox = document.getElementById('search-results');

const searchResults = [ {
    abv: 4.5,
    brewers_tips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
    description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    food_pairing: ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"],
    ibu: 60,
    id: 1,
    tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    name: "Buzz",
}]

const setResults = searchResults => {
    searchReasultsBox.innerHTML = null;
    searchResults.map(result => {
        const {
            name,
            abv,
            ibu,
            tagline,
            description,
            brewers_tips,
            food_pairing
        } = result;

        const searchResultItem = document.createElement('li');
        const foodPairingList = document.createElement('ul');
        const foodPairingListTitle = document.createElement('p');
        const searchResultContent = `
            <h3 id="title">${name}</h3>
            <p id="abv">ABV: ${abv}</p>
            <p id="ibu">IBU: ${ibu}</p>
            <p id="tagline">Tagline: ${tagline}</p>
            <p id="description">Description: ${description}</p>
            <p id="brewers-tip">Brewers tip:${brewers_tips}</p>
        `;

        foodPairingListTitle.innerText = "Food pairing";
        foodPairingList.id = "food-pairing";
        food_pairing.map((food) => {
            const foodItem = document.createElement('li');
            foodItem.innerText = food;
            foodPairingList.appendChild(foodItem);
        });
        
        searchResultItem.innerHTML = searchResultContent;
        searchReasultsBox.appendChild(searchResultItem);
        searchResultItem.appendChild(foodPairingList);
        searchResultItem.insertBefore(foodPairingListTitle, foodPairingList);
    });
}
setResults(searchResults);

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

//this fetch is needed in searching by description

function fetchBeers() {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
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

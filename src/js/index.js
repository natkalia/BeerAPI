import '../assets/style.css';

// search results - warning! this function takes array as a parameter

const searchReasultsBox = document.getElementById('search-results');

const mockDataToSearchResults = [{
    name: "Jakas nazwa",
    image_url: 'https://picsum.photos/200',
    abv: 5,
    ibu: 10,
    tagline: 'jakis text',
    description: 'Just add your desired image size (width & height) after our URL, and youll get a random image.',
    food_pairing: ['cos', 'cos', 'cos innego']
}, {
    name: "Jakas nazwa",
    image_url: 'https://picsum.photos/200',
    abv: 5,
    ibu: 10,
    tagline: 'jakis text',
    description: 'Just add your desired image size (width & height) after our URL, and youll get a random image.',
    food_pairing: ['cos', 'cos', 'cos innego']
}, {
    name: "Jakas nazwa",
    image_url: 'https://picsum.photos/200',
    abv: 5,
    ibu: 10,
    tagline: 'jakis text',
    description: 'Just add your desired image size (width & height) after our URL, and youll get a random image.',
    food_pairing: ['cos', 'cos', 'cos innego']
}, {
    name: "Jakas nazwa",
    image_url: 'https://picsum.photos/200',
    abv: 5,
    ibu: 10,
    tagline: 'jakis text',
    description: 'Just add your desired image size (width & height) after our URL, and youll get a random image.',
    food_pairing: ['cos', 'cos', 'cos innego']
}];

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
        const foodPairingList = food_pairing.map((food) => {
            return `<li class="search-results__food-list-item">${food}</li>`;
        }).join('');
        
        const searchResultContent = `
            <div class="search-results__img-wrapper">
                <img class="search-results__img" src= ${image_url} />
            </div>
            <div class="search-results__properties">
                <h3 class="search-results__title">${name}</h3>         
                <p class="search-results__tagline">Tagline: ${tagline}</p>
                <p class="search-results__description">Description: ${description}</p>
                <p class="search-results__abv">ABV: ${abv}</p>
                <p class="search-results__ibu">IBU: ${ibu}</p>   
                <div class="search-results__food">
                    <p class="search-results__food-title">Food pairing</p>
                    <ul class="search-results__food-list">
                        ${foodPairingList}
                    </ul>
                </div>
            </div>
        `;
        
        searchResultItem.innerHTML = searchResultContent;
        searchResultItem.classList.add("search-results__item");
        searchReasultsBox.appendChild(searchResultItem);
    });
}

setResults(mockDataToSearchResults);

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

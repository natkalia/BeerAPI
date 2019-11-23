// choosenFood - potrwa wybrana przez usera

function fetchBeerByFood(choosenFood){
    fetch(`https://api.punkapi.com/v2/beers?food=${choosenFood}`)
    .then(response => {
        return response.json();
    })
    .then(data => { 
        console.log(data);
        //tu co ma się zadziać po pobraniu danych
    }).catch( error => {
        console.log('Błąd!', error);
    });
};

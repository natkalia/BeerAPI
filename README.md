# Beer Finder App - CodersCamp Project 3

Group project created for CodersCamp 2019 (part of Team Warsaw). :beer:

Project originally created by our team: [https://github.com/dobrzyckahanna/BeerAPI](https://github.com/dobrzyckahanna/BeerAPI)

CodersCamp finished in January 2020, but I am still coming back to this project to improve code and features in this forked repo.

## Live demo

Github Pages: [https://natkalia.github.io/BeerAPI/](https://natkalia.github.io/BeerAPI/)

## Description 

Beer Finder App is a website which connects to Punk API (https://punkapi.com/documentation/v2) in order to get beer data based on different criteria provided by the user. 
The app displays results in form of cards with beers matching selected criterion. 

## Authors:

- Adam and his [Github](https://github.com/adamsobiesak)
- Agata and her [Github](https://github.com/ceglarzagata)
- Ania and her [Github](https://github.com/apiwonska)
- Natalia and her [Github](https://github.com/natkalia)
	
## Project technologies and tools

The app is built with the following technologies and tools:

1. HTML5
2. CSS3 (no CSS preprocessors)
3. JavaScript ES6
4. Webpack
5. Babel
6. noUiSlider, Slick slider
7. Trello for project and tasks management
8. Deployment on Github Pages

## Project requirements

The app was created according to CodersCamp guidelines that it should demonstrate in particular following Javascript features:

* connecting to external API (we used Punk API)
* interactions with DOM
* getting elements with JS
* changing styles with JS
* changing html content with JS
* animations (you can see some bubbles on the website)
* external libraries - e.g. sliders, swipers(we used noUiSlider, Slick slider)
* asynchronous JS: callbacks, promises, async/await

## App features

You can search for beers matching one of the following criteria:

* beer name
* beer description
* alcohol by volume (ABV)
* International Bittering Units (IBU)

You will see search results with data relating to the above-mentioned criteria like name, ABV etc., and additionally:

* a tagline (teaser) about chosen beer
* food pairing advice

## Setup for development

If you want to run our app at your local machine you have to clone this repository or just download zip file and unzip it locally. This is up to you. If you decide to clone this repo, you should use the below command in your command line tool: 
```bash
git clone https://github.com/natkalia/BeerAPI.git
```
After, move to the main folder of the app and use the following command which retrieves all dependencies necessary to build our application:
```bash
npm install
```
If the previous commands was executed successfully, it's time to start our app with the following command:
```bash
npm start
```
As a result you should be taken to a browser with our application running on localhost. Now you are ready to work!

## Credits

* Images from: [https://www.rawpixel.com/](https://www.rawpixel.com/)
* Used API: [https://punkapi.com/documentation/v2](https://punkapi.com/documentation/v2)

## About CodersCamp

This is the 5th edition od the camp. 
More info about the camp: [https://coderscamp.edu.pl/](https://coderscamp.edu.pl/)
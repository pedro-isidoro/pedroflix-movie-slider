import {showMovieImage, hideForwardArrow, hideBackArrow, changeBackgroundAdventureImage} from './functions.js'

// MOVIES IMAGE ARRAY
const adventuresMoviesImages = [
    "./src/images/movies/adventure/star-wars-I.jpg",
    "./src/images/movies/adventure/star-wars-II.jpg",
    "./src/images/movies/adventure/star-wars-III.jpg",
    "./src/images/movies/adventure/star-wars-IV.jpg",
    "./src/images/movies/adventure/star-wars-han-solo.jpg",
    "./src/images/movies/adventure/star-wars-rogue-one.jpg",
    "./src/images/movies/adventure/star-wars-V.png",
    "./src/images/movies/adventure/star-wars-VI.jpg",
    "./src/images/movies/adventure/star-wars-VII.jpg",
    "./src/images/movies/adventure/star-wars-VIII.jpg",
    "./src/images/movies/adventure/star-wars-IX.jpg",
    "./src/images/movies/adventure/Hobbit-1.jpg",
    "./src/images/movies/adventure/hobbit-2.jpg",
    "./src/images/movies/adventure/hobbit-3.jpg",
    "./src/images/movies/adventure/o-senhor-dos-aneis-1.jpg",
    "./src/images/movies/adventure/o-senhor-dos-aneis-2.jpg",
    "./src/images/movies/adventure/o-senhor-dos-aneis-3.jpg"
];

const actionMoviesImages = [
    "./src/images/movies/action/capitao-america-o-primeiro-vingador.jpg",
    "./src/images/movies/action/capita-marvel.jpg",
    "./src/images/movies/action/homem-de-ferro.jpg",
    "./src/images/movies/action/o-incrivel-hulk.jpg",   
    "./src/images/movies/action/homem-de-ferro-2.png",
    "./src/images/movies/action/thor.jpg",
    "./src/images/movies/action/the-avengers.jpg",
    "./src/images/movies/action/thor-2.jpg",
    "./src/images/movies/action/homem-de-ferro-3.jpg",
    "./src/images/movies/action/capitao-america-2.jpg",
    "./src/images/movies/action/guardioes-da-galaxia.jpg",
    "./src/images/movies/action/guardioes-da-galaxia-2.jpg",
    "./src/images/movies/action/vingadores-2.jpg",
    "./src/images/movies/action/homem-formiga.jpg",
    "./src/images/movies/action/Capitao-america-3.jpg",
    "./src/images/movies/action/viuva-negra.jpg",
    "./src/images/movies/action/pantera-negra.jpg",
    "./src/images/movies/action/homem-aranha.jpg",
    "./src/images/movies/action/doutor-estranho.jpg",
    "./src/images/movies/action/thor-3.jpg",
    "./src/images/movies/action/homem-formiga-2.jpg",
    "./src/images/movies/action/vingadores-3.jpg",
    "./src/images/movies/action/vingadores-4.jpg",
    "./src/images/movies/action/shang-chi.jpg",
    "./src/images/movies/action/eternos.jpg",
    "./src/images/movies/action/homem-aranha-2.jpg",
    "./src/images/movies/action/homem-aranha-3.jpg",
    "./src/images/movies/action/doutor-estranho-2.jpg",
    "./src/images/movies/action/homem-formiga-3.jpg",
    "./src/images/movies/action/pantera-negra-2.jpg",
    "./src/images/movies/action/thor-4.jpg"
];

// INDEX
let adventureMoviesImagesIndex = 0;
let actionMoviesImagesIndex = 0;

// ARROWS
const adventureBackArrow = document.getElementById("back-arrow");
const adventureForwardArrow = document.getElementById("forward-arrow");
const actionBackArrow = document.getElementById("back-arrow-1");
const actionForwardArrow = document.getElementById("forward-arrow-1");

// MOVIES
const adventureMovies = document.getElementById("adventure-movies");
// const actionMovies = document.getElementById("action-movies");

// IMG
const adventureImg = document.getElementById("adventure-image");
const actionImg = document.getElementById("action-image");

// ADDEVENTLISTENNER - ADVENTURE
adventureBackArrow.addEventListener('click', () => {
    if(adventureMoviesImagesIndex === 0){
        return;
    };

    adventureMoviesImagesIndex --;
    console.log(adventureMoviesImagesIndex);

    showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);
    hideBackArrow(adventureMoviesImagesIndex, adventureBackArrow);
    hideForwardArrow(adventureMoviesImagesIndex, adventuresMoviesImages, adventureForwardArrow);
    changeBackgroundAdventureImage(adventureMoviesImagesIndex, adventureMovies);
});

adventureForwardArrow.addEventListener('click', () => {
    if(adventureMoviesImagesIndex === adventuresMoviesImages.length - 1){
        return;
    };

    adventureMoviesImagesIndex ++;
    console.log(adventureMoviesImagesIndex);

    showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);
    hideForwardArrow(adventureMoviesImagesIndex, adventuresMoviesImages, adventureForwardArrow);
    hideBackArrow(adventureMoviesImagesIndex, adventureBackArrow);
    changeBackgroundAdventureImage(adventureMoviesImagesIndex, adventureMovies);
});

// ADDEVENTLISTENNER - ACTION
actionBackArrow.addEventListener('click', () => {
    if(actionMoviesImagesIndex === 0){
        return;
    };

    actionMoviesImagesIndex --;
    console.log(actionMoviesImagesIndex);

    showMovieImage(actionImg, actionMoviesImages, actionMoviesImagesIndex);
    hideBackArrow(actionMoviesImagesIndex, actionBackArrow);
    hideForwardArrow(actionMoviesImagesIndex, actionMoviesImages, actionForwardArrow);
    // actionChangeBackgroundImage();
});

actionForwardArrow.addEventListener('click', () => {
    if(actionMoviesImagesIndex === actionMoviesImages.length - 1){
        return;
    };

    actionMoviesImagesIndex ++;
    console.log(actionMoviesImagesIndex);

    showMovieImage(actionImg, actionMoviesImages, actionMoviesImagesIndex);
    hideForwardArrow(actionMoviesImagesIndex, actionMoviesImages, actionForwardArrow);
    hideBackArrow(actionMoviesImagesIndex, actionBackArrow);
    // actionChangeBackgroundImage();
});

// SHOW INITIAL IMAGES
showMovieImage(adventureImg, adventuresMoviesImages, adventureMoviesImagesIndex);
showMovieImage(actionImg, actionMoviesImages, actionMoviesImagesIndex);
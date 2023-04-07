// MOVIES IMAGE ARRAY
const adventuresMoviesImages = [
    "./src/images/movies/star-wars-I.jpg",
    "./src/images/movies/star-wars-II.jpg",
    "./src/images/movies/star-wars-III.jpg",
    "./src/images/movies/star-wars-IV.jpg",
    "./src/images/movies/star-wars-han-solo.jpg",
    "./src/images/movies/star-wars-rogue-one.jpg",
    "./src/images/movies/star-wars-V.png",
    "./src/images/movies/star-wars-VI.jpg",
    "./src/images/movies/star-wars-VII.jpg",
    "./src/images/movies/star-wars-VIII.jpg",
    "./src/images/movies/star-wars-IX.jpg",
    "./src/images/movies/Hobbit-1.jpg",
    "./src/images/movies/Hobbit-2.jpg",
    "./src/images/movies/Hobbit-3.jpg",
    "./src/images/movies/o-senhor-dos-aneis-1.jpg",
    "./src/images/movies/o-senhor-dos-aneis-2.jpg",
    "./src/images/movies/o-senhor-dos-aneis-3.jpg",
];

const actionsMoviesImages = [
    "./src/images/movies/capitao-america-o-primeiro-vingador.jpg",
    "./src/images/movies/capita-marvel.jpg",
    "./src/images/movies/homem-de-ferro.jpg",
    "./src/images/movies/o-incrivel-hulk.jpg",   
    "./src/images/movies/homem-de-ferro-2.png",
    "./src/images/movies/thor.jpg",
    "./src/images/movies/the-avengers.jpg",
    "./src/images/movies/thor-2.jpg",
    "./src/images/movies/homem-de-ferro-3.jpg",
    "./src/images/movies/capitao-america-2.jpg",
    "./src/images/movies/guardioes-da-galaxia.jpg",
    "./src/images/movies/guardioes-da-galaxia-2.jpg",
    "./src/images/movies/vingadores-2.jpg",
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
const actionMovies = document.getElementById("action-movies");

// SLIDER
const adventureSlider = document.getElementById("adventure-slider");
const actionSlider = document.getElementById("action-slider");

// IMG
const adventureImg = document.getElementById("adventure-image");
const actionImg = document.getElementById("action-image");

// ADVENTURE FUNCTIONS
function adventureShowMovieImage(){
    adventureImg.src = adventuresMoviesImages[adventureMoviesImagesIndex];
    console.log(adventureImg);
};

function adventureHideForwardArrow(){
    const ehAUltimaImagem = adventureMoviesImagesIndex !== 0 && adventureMoviesImagesIndex === adventuresMoviesImages.length - 1;
    if(ehAUltimaImagem){
        adventureForwardArrow.classList.add("opacity");
    }else{
        adventureForwardArrow.classList.remove("opacity");
    }
};

function adventureHideBackArrow(){
    const naoEhAPrimeiraImagem = adventureMoviesImagesIndex !== 0
    if(naoEhAPrimeiraImagem){
        adventureBackArrow.classList.remove("opacity");
    }else{
        adventureBackArrow.classList.add("opacity");
    };
};

function adventureChangeBackgroundImage(){
    if(adventureMoviesImagesIndex === 11){
        adventureMovies.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)";
    }else if(adventureMoviesImagesIndex === 10){
        adventureMovies.style.backgroundImage = "url(./src/images/background-movies/death-star.jpg)";
    }else{
        return;
    };
};

// ADDEVENTLISTENNER
adventureBackArrow.addEventListener('click', () => {
    if(adventureMoviesImagesIndex === 0){
        return;
    };

    adventureMoviesImagesIndex --;
    console.log(adventureMoviesImagesIndex);

    adventureShowMovieImage();
    adventureHideForwardArrow();
    adventureHideBackArrow();
    adventureChangeBackgroundImage();
});

adventureForwardArrow.addEventListener('click', () => {
    if(adventureMoviesImagesIndex === adventuresMoviesImages.length - 1){
        return;
    };

    adventureMoviesImagesIndex ++;
    console.log(adventureMoviesImagesIndex);

    adventureShowMovieImage();
    adventureHideForwardArrow();
    adventureHideBackArrow();
    adventureChangeBackgroundImage();
});

// ACTION FUNCTIONS
function actionShowMovieImage(){
    actionImg.src = actionsMoviesImages[actionMoviesImagesIndex];
    console.log(actionImg);
};

function actionHideForwardArrow(){
    const ehAUltimaImagem = actionMoviesImagesIndex !== 0 && actionMoviesImagesIndex === actionsMoviesImages.length - 1;
    if(ehAUltimaImagem){
        actionForwardArrow.classList.add("opacity");
    }else{
        actionForwardArrow.classList.remove("opacity");
    }
};

function actionHideBackArrow(){
    const naoEhAPrimeiraImagem = actionMoviesImagesIndex !== 0
    if(naoEhAPrimeiraImagem){
        actionBackArrow.classList.remove("opacity");
    }else{
        actionBackArrow.classList.add("opacity");
    };
};

// function actionChangeBackgroundImage(){
//     if(actionMoviesImagesIndex === 11){
//         adventureMovies.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)";
//     }else if(adventureMoviesImagesIndex === 10){
//         adventureMovies.style.backgroundImage = "url(./src/images/background-movies/death-star.jpg)";
//     }else{
//         return;
//     };
// };

// ADDEVENTLISTENNER
actionBackArrow.addEventListener('click', () => {
    if(actionMoviesImagesIndex === 0){
        return;
    };

    actionMoviesImagesIndex --;
    console.log(actionMoviesImagesIndex);

    actionShowMovieImage();
    actionHideForwardArrow();
    actionHideBackArrow();
    // actionChangeBackgroundImage();
});

actionForwardArrow.addEventListener('click', () => {
    if(actionMoviesImagesIndex === actionsMoviesImages.length - 1){
        return;
    };

    actionMoviesImagesIndex ++;
    console.log(actionMoviesImagesIndex);

    actionShowMovieImage();
    actionHideForwardArrow();
    actionHideBackArrow();
    // actionChangeBackgroundImage();
});

// SHOW INITIAL IMAGES
adventureShowMovieImage();
actionShowMovieImage();
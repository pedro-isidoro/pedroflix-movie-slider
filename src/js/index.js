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
    "./src/images/capitao-america-o-primeiro-vingador.jpg",
    "./src/images/capita-marvel.jpg",
    "./src/images/homem-de-ferro.jpg",
    "./src/images/o-incrivel-hulk.jpg",   
    "./src/images/homem-de-ferro-2.jpg",
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

// FUNCTIONS
function showMovieImage(){
    adventureImg.src = adventuresMoviesImages[adventureMoviesImagesIndex];
    console.log(adventureImg);
};

function hideForwardArrow(){
    const ehAUltimaImagem = adventureMoviesImagesIndex !== 0 && adventureMoviesImagesIndex === adventuresMoviesImages.length - 1;
    if(ehAUltimaImagem){
        adventureForwardArrow.classList.add("opacity");
    }else{
        adventureForwardArrow.classList.remove("opacity");
    }
};

function hideBackArrow(){
    const naoEhAPrimeiraImagem = adventureMoviesImagesIndex !== 0
    if(naoEhAPrimeiraImagem){
        adventureBackArrow.classList.remove("opacity");
    }else{
        adventureBackArrow.classList.add("opacity");
    };
};

function changeBackgroundImage(){
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

    showMovieImage();
    hideForwardArrow();
    hideBackArrow();
    changeBackgroundImage();
});

adventureForwardArrow.addEventListener('click', () => {
    if(adventureMoviesImagesIndex === adventuresMoviesImages.length - 1){
        return;
    };

    adventureMoviesImagesIndex ++;
    console.log(adventureMoviesImagesIndex);

    showMovieImage();
    hideForwardArrow();
    hideBackArrow();
    changeBackgroundImage();
});

showMovieImage();
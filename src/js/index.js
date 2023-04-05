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

// INDEX
let adventureMoviesImagesIndex = 0;

// ARROWS
const adventureBackArrow = document.getElementById("back-arrow");
console.log(adventureBackArrow);
const adventureForwardArrow = document.getElementById("forward-arrow");
console.log(adventureForwardArrow);

// MOVIES
const adventureMovies = document.getElementsByClassName("adventure-movies");

// SLIDER
const adventureSlider = document.getElementById("adventure-slider");

// IMG
const adventureImg = document.getElementById("adventure-image");

// FUNCTIONS
function changeBackgroundImage(){
    if(adventureMoviesImagesIndex === 11){
        adventureMovies.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)";
    };
};

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
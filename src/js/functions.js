// FUNCTIONS
function showMovieImage(img, moviesImages, moviesImagesIndex) {
  img.src = moviesImages[moviesImagesIndex];
  console.log(img);
}

function hideForwardArrow(moviesImagesIndex, moviesImages, forwardArrow) {
  const ehAUltimaImagem = moviesImagesIndex !== 0 && moviesImagesIndex === moviesImages.length - 1;
  if (ehAUltimaImagem) {
    forwardArrow.classList.add("opacity");
  } else {
    forwardArrow.classList.remove("opacity");
  }
}

function hideBackArrow(moviesImagesIndex, backArrow) {
  const naoEhAPrimeiraImagem = moviesImagesIndex !== 0;
  if (naoEhAPrimeiraImagem) {
   backArrow.classList.remove("opacity");
  } else {
    backArrow.classList.add("opacity");
  }
}

function changeBackgroundAdventureImage(index, slider) {
  if (index === 11) {
    slider.style.backgroundImage = "url(./src/images/background-movies/hobbit.jpg)";
  } else if (index === 10) {
    slider.style.backgroundImage = "url(./src/images/background-movies/death-star.jpg)";
  } else {
    return;
  }
}

export {showMovieImage, hideForwardArrow, hideBackArrow, changeBackgroundAdventureImage};
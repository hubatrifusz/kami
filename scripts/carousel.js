const carouselList = document.querySelectorAll('.carousel');
const imageContainerList = document.querySelectorAll('.carousel_image_container');

const imageContainer = document.querySelector('.carousel_image_container');
const carousel = document.querySelector('.carousel');

//*SETUP
let currentImageIndex = 2;

imageArray = Array.from(imageContainer.children);

const lastTwoClones = imageArray.slice(-2).map(img => img.cloneNode(true));
const firstTwoClones = imageArray.slice(0,2).map(img => img.cloneNode(true));

imageContainer.innerHTML = '';

lastTwoClones.forEach(img => imageContainer.appendChild(img));
imageArray.forEach(img => imageContainer.appendChild(img));
firstTwoClones.forEach(img => imageContainer.appendChild(img));

carousel.scrollLeft = 0;
carousel.style.scrollBehavior = 'auto';
carousel.scrollLeft = (imageContainer.children[currentImageIndex].getBoundingClientRect().left - window.innerWidth/2 + imageContainer.children[currentImageIndex].getBoundingClientRect().width/2);
carousel.style.scrollBehavior = 'smooth';

console.log(imageContainer.children)
//FUNCTIONS
let isScrolling = false;

function carouselScrollLeft() {
    if (isScrolling) return;
    isScrolling = true

    carousel.scrollLeft = imageContainer.children[currentImageIndex-1].offsetLeft + imageContainer.children[currentImageIndex-1].clientWidth/2 - window.innerWidth/2;
    currentImageIndex--;

    if (currentImageIndex-1 == 0) {

        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = imageContainer.children[imageContainer.children.length-2].offsetLeft - window.innerWidth/2 + imageContainer.children[imageContainer.children.length-2].clientWidth/2;
        carousel.style.scrollBehavior = 'smooth';

        currentImageIndex = imageContainer.children.length-2;
        carousel.scrollLeft = imageContainer.children[currentImageIndex-1].offsetLeft + imageContainer.children[currentImageIndex-1].clientWidth/2 - window.innerWidth/2;
        currentImageIndex--;
    }

    setTimeout(() => {
        isScrolling = false;
    }, 500);


}

function carouselScrollRight() {
    if (isScrolling) return;
    isScrolling = true

    carousel.scrollLeft = imageContainer.children[currentImageIndex+1].offsetLeft + imageContainer.children[currentImageIndex+1].clientWidth/2 - window.innerWidth/2;
    currentImageIndex++;

    if (currentImageIndex+1 == imageContainer.children.length-1) {

        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = imageContainer.children[1].offsetLeft - window.innerWidth/2 + imageContainer.children[1].clientWidth/2;
        carousel.style.scrollBehavior = 'smooth';

        currentImageIndex = 1
        carousel.scrollLeft = imageContainer.children[currentImageIndex+1].offsetLeft + imageContainer.children[currentImageIndex+1].clientWidth/2 - window.innerWidth/2;
        currentImageIndex++;
    }

    setTimeout(() => {
        isScrolling = false;
    }, 500);
}

setInterval(carouselScrollRight, 5000);

function logCarouselScrollLeft() {
    console.log(imageContainer.children[currentImageIndex+1].offsetLeft)
}
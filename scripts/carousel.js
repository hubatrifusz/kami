const carouselList = document.querySelectorAll('.carousel');
const imageContainerList = document.querySelectorAll('.carousel_image_container');

const imageContainer = document.querySelector('.carousel_image_container');
const carousel = document.querySelector('.carousel');

//*SETUP
let currentImageIndex = 2;

imageArray = Array.from(imageContainer.children);

carousel.style.scrollBehavior = 'auto';
carousel.scrollLeft += (imageArray[currentImageIndex].getBoundingClientRect().left - window.innerWidth/2 + imageArray[currentImageIndex+1].getBoundingClientRect().width/2);
carousel.style.scrollBehavior = 'smooth';

const lastTwoClones = imageArray.slice(-2).map(img => img.cloneNode(true));
const firstTwoClones = imageArray.slice(0,2).map(img => img.cloneNode(true));

imageContainer.innerHTML = '';

lastTwoClones.forEach(img => imageContainer.appendChild(img));
imageArray.forEach(img => imageContainer.appendChild(img));
firstTwoClones.forEach(img => imageContainer.appendChild(img));


//FUNCTIONS
let isScrolling = false;

function carouselScrollLeft() {
    if (isScrolling) return;

    isScrolling = true

    carousel.scrollLeft -= (imageContainer.children[currentImageIndex].getBoundingClientRect().width/2) + (imageContainer.children[currentImageIndex-1].getBoundingClientRect().width/2);
    currentImageIndex--;

    if (currentImageIndex-1 == 0) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft += imageContainer.children[imageContainer.children.length-2].getBoundingClientRect().left - window.innerWidth/2 + imageContainer.children[imageContainer.children.length-2].getBoundingClientRect().width/2;
        carousel.style.scrollBehavior = 'smooth';
        currentImageIndex = imageContainer.children.length-2;
        carousel.scrollLeft -= (imageContainer.children[currentImageIndex].getBoundingClientRect().width/2) + (imageContainer.children[currentImageIndex-1].getBoundingClientRect().width/2);
        currentImageIndex--;
    }

    setTimeout(() => {
        isScrolling = false;
    }, 300);


}

function carouselScrollRight() {
    if (isScrolling) return;
    isScrolling = true

    carousel.scrollLeft += (imageContainer.children[currentImageIndex].getBoundingClientRect().width/2) + (imageContainer.children[currentImageIndex+1].getBoundingClientRect().width/2);
    currentImageIndex++;

    if (currentImageIndex+1 == imageContainer.children.length-1) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft += imageContainer.children[1].getBoundingClientRect().left - window.innerWidth/2 + imageContainer.children[1].getBoundingClientRect().width/2;
        carousel.style.scrollBehavior = 'smooth';
        currentImageIndex = 1
        carousel.scrollLeft += (imageContainer.children[currentImageIndex].getBoundingClientRect().width/2) + (imageContainer.children[currentImageIndex+1].getBoundingClientRect().width/2);
        currentImageIndex++;
    }

    setTimeout(() => {
        isScrolling = false;
    }, 300);
}
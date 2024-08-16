//*SETUP
// // const imageContainer = document.querySelector('.carousel_image_container');
// // const carousel = document.querySelector('.carousel');



//TODO: -drag scrolling; -counter at the bottom; -to be reusable

export class Carousel {
    constructor(url, altText) {
        this.url = url;
        this.altText = altText;
    }

    addImages(carouselID) {
        const container = document.getElementById(carouselID);
        if (!container) return

        const imageContainer = container.children[0];

        if (!imageContainer) return

        const imgElement = document.createElement('img');

        imgElement.src = this.url;
        imgElement.alt = this.altText

        imageContainer.appendChild(imgElement);
    }

    render(carouselID) {
        const container = document.getElementById(carouselID);
        if (!container) return

        const imageContainer = container.children[0];
        if (!imageContainer) return

        let currentImageIndex = 2;

        let imageArray = Array.from(imageContainer.children);

        const lastTwoClones = imageArray.slice(-2).map(img => img.cloneNode(true));
        const firstTwoClones = imageArray.slice(0,2).map(img => img.cloneNode(true));

        imageContainer.innerHTML = '';

        lastTwoClones.forEach(img => imageContainer.appendChild(img));
        imageArray.forEach(img => imageContainer.appendChild(img));
        firstTwoClones.forEach(img => imageContainer.appendChild(img));

        container.scrollLeft = 0;
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = (imageContainer.children[currentImageIndex].offsetLeft - window.innerWidth/2 + imageContainer.children[currentImageIndex].clientWidth/2);
        container.style.scrollBehavior = 'smooth';
    }

    carouselScrollRight() {
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

    carouselScrollLeft() {
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
}
//TODO: -drag scrolling;
//TODO: -counter at the bottom;
//TODO: create imageContainer and buttons in the class;
//TODO: not in the HTML;
//TODO: resize on window resize;
//TODO: auto scrolling;

export class Carousel {
    constructor(carouselID) {
        this.carouselID = carouselID;
        this.container = document.getElementById(carouselID);
        this.imageContainer = this.container.children[0];
        this.currentImageIndex = 2;
        this.rightButton = this.container.children[2];
        this.leftButton = this.container.children[1];
    }

    addImages(url, altText) {
        const container = document.getElementById(this.carouselID);
        if (!container) return

        const imageContainer = container.children[0];

        if (!imageContainer) return

        const imgElement = document.createElement('img');

        imgElement.src = url;
        imgElement.alt = altText

        imageContainer.appendChild(imgElement);
    }

    render() {
        if (!this.container) return
        if (!this.imageContainer) return

        let imageArray = Array.from(this.imageContainer.children);

        const lastTwoClones = imageArray.slice(-2).map(img => img.cloneNode(true));
        const firstTwoClones = imageArray.slice(0,2).map(img => img.cloneNode(true));

        this.imageContainer.innerHTML = '';
        lastTwoClones.forEach(img => this.imageContainer.appendChild(img));
        imageArray.forEach(img => this.imageContainer.appendChild(img));
        firstTwoClones.forEach(img => this.imageContainer.appendChild(img));

        this.checkImagesLoaded();

        this.rightButton.addEventListener('click', () => this.scrollRight());
        this.leftButton.addEventListener('click', () => this.scrollLeft());
    }

    checkImagesLoaded() {
        for (let img of this.imageContainer.children) {
            img.onload = () => this.centerImages();
        }
    }

    centerImages() {
        this.container.scrollLeft = 0;
        this.container.style.scrollBehavior = 'auto';
        this.container.scrollLeft = (this.imageContainer.children[this.currentImageIndex].offsetLeft - window.innerWidth/2 + this.imageContainer.children[this.currentImageIndex].clientWidth/2);
        this.container.style.scrollBehavior = 'smooth';
    }

    scrollRight() {
        let isScrolling = false;

        if (isScrolling) return;
        isScrolling = true;
    
        this.container.scrollLeft = this.imageContainer.children[this.currentImageIndex+1].offsetLeft + this.imageContainer.children[this.currentImageIndex+1].clientWidth/2 - window.innerWidth/2;
        this.currentImageIndex++;
    
        if (this.currentImageIndex+1 == this.imageContainer.children.length-1) {
    
            this.container.style.scrollBehavior = 'auto';
            this.container.scrollLeft = this.imageContainer.children[1].offsetLeft - window.innerWidth/2 + this.imageContainer.children[1].clientWidth/2;
            this.container.style.scrollBehavior = 'smooth';
    
            this.currentImageIndex = 1
            this.container.scrollLeft = this.imageContainer.children[this.currentImageIndex+1].offsetLeft + this.imageContainer.children[this.currentImageIndex+1].clientWidth/2 - window.innerWidth/2;
            this.currentImageIndex++;
        }
    
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }

    scrollLeft() {
        let isScrolling = false;
        if (isScrolling) return;

        isScrolling = true
        this.container.scrollLeft = this.imageContainer.children[this.currentImageIndex-1].offsetLeft + this.imageContainer.children[this.currentImageIndex-1].clientWidth/2 - window.innerWidth/2;
        this.currentImageIndex--;
    
        if (this.currentImageIndex-1 == 0) {
    
            this.container.style.scrollBehavior = 'auto';
            this.container.scrollLeft = this.imageContainer.children[this.imageContainer.children.length-2].offsetLeft - window.innerWidth/2 + this.imageContainer.children[this.imageContainer.children.length-2].clientWidth/2;
            this.container.style.scrollBehavior = 'smooth';
    
            this.currentImageIndex = this.imageContainer.children.length-2;
            this.container.scrollLeft = this.imageContainer.children[this.currentImageIndex-1].offsetLeft + this.imageContainer.children[this.currentImageIndex-1].clientWidth/2 - window.innerWidth/2;
            this.currentImageIndex--;
        }
    
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    
    
    }
}
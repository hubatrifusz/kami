import { Carousel } from '/scripts/Carousel.js';

const images = [
    { src: '/photos/dogOwners.jpg', alt: 'dogOwners'},
    { src: '/photos/otherOwners.jpg', alt: 'otherOwners'},
    { src: '/photos/horseOwners.jpg', alt: 'horseOwners'},
    { src: '/photos/skyline.jpg', alt: 'skyline'},
    { src: '/photos/trackhawk.jpg', alt: 'trackhawk'},
    { src: '/photos/lexus.jpg', alt: 'lexus'},
]

images.forEach(imageData => {
    const image = new Carousel(imageData.src, imageData.alt);
    image.render(imageData.carouselID, imageData.imageContainerID);
});
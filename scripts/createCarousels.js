import { Carousel } from '/scripts/Carousel.js';

const carousel0Images = [
    { url: '/photos/dogOwners.jpg', altText: 'dogOwners'},
    { url: '/photos/otherOwners.jpg', altText: 'otherOwners'},
    { url: '/photos/horseOwners.jpg', altText: 'horseOwners'},
    { url: '/photos/skyline.jpg', altText: 'skyline'},
    { url: '/photos/trackhawk.jpg', altText: 'trackhawk'},
    { url: '/photos/lexus.jpg', altText: 'lexus'},
]
const carousel0 = new Carousel('carousel0');

carousel0Images.forEach(imageData => {
    carousel0.addImages(imageData.url, imageData.altText);
});

carousel0.render();
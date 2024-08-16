import { Carousel } from '/scripts/Carousel.js';

const carousel0Images = [
    { url: '/photos/dogOwners.jpg', altText: 'dogOwners'},
    { url: '/photos/otherOwners.jpg', altText: 'otherOwners'},
    { url: '/photos/horseOwners.jpg', altText: 'horseOwners'},
    { url: '/photos/skyline.jpg', altText: 'skyline'},
    { url: '/photos/trackhawk.jpg', altText: 'trackhawk'},
    { url: '/photos/lexus.jpg', altText: 'lexus'},
]
const carousel0 = new Carousel(undefined, undefined);

carousel0Images.forEach(imageData => {
    carousel0 = new Carousel(imageData.url, imageData.altText);
    carousel0.addImages('carousel0');
});

const carousel1Images = [
    { url: '/photos/carousel/carousel1.JPG', altText: 'carousel1'},
    { url: '/photos/carousel/carousel2.JPG', altText: 'carousel2'},
    { url: '/photos/carousel/carousel3.JPG', altText: 'carousel3'},
    { url: '/photos/carousel/carousel4.JPG', altText: 'carousel4'},
]

carousel1Images.forEach(imageData => {
    carousel1 = new Carousel(imageData.url, imageData.altText);
    carousel1.addImages('carousel1');
})

carousel1.render('carousel1');
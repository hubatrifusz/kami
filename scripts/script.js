function setImageSize() {
    let ImageBlocks = document.querySelectorAll('.picture_block');
    let numberOfIMages = 0;
    ImageBlocks.forEach(imageBlock => {
       for (image of imageBlock.children) {
        numberOfIMages += 1;
       }
       for (image of imageBlock.children) {
        let imageWidth = `${(100/numberOfIMages)-10}%`;
        image.style.width = imageWidth;
       }
       numberOfIMages = 0;
    });
    
}

document.addEventListener('DOMContentLoaded', setImageSize);


function fadeInImage(event){
    let images = document.querySelectorAll('.categoriesImage');

    images.forEach(image => {
        image.style.opacity = 0;
        if (image.id == event.target.id) {
            image.style.opacity = 1;
        }
    });
}
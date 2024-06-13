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

function changeImageOnHover(event) {
    const image = document.querySelector('#categoriesImage');
    image.src = `photos/${event.target.id}.jpg`
}


//TODO: zoom in and out if clicked


export class Gallery {
    constructor(galleryID, columnNumber) {
        this.galleryID = galleryID;
        this.columnNumber = columnNumber;
        this.container = document.getElementById(galleryID);

        if (!this.container) return
        
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('galleryContainer');
        this.container.appendChild(imageContainer);
        this.imageContainer = this.container.children[0];

        if (!this.imageContainer) return

        this.createcolumns();
    }

    createcolumns() {
        for (let i = 0; i < this.columnNumber; i++) {
            const column = document.createElement('div');
            column.classList.add('column');
            this.imageContainer.appendChild(column);
        }

        this.addImages()
    }

    addImages() {
        const dataFileName = `/data/${this.galleryID}.json`;

        fetch(dataFileName)
        .then(response => response.json())
        .then(imageData => {
            let columnList = this.imageContainer.children;
            let index = 0;
            imageData.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.altText; 
                img.addEventListener('click', (e) => this.handleImageClicked(e.target));
                columnList[index].appendChild(img);
                index = (index + 1) % this.columnNumber;;
            });
        })
        .catch(error => console.error('Error loading image data:', error));
    }

    handleImageClicked(image) {
        const focusedImageViewer = document.createElement('div');
        focusedImageViewer.classList.add('focusedImageViewer');

        focusedImageViewer.addEventListener('click', () => {
            this.container.removeChild(focusedImageViewer)
        });
        focusedImageViewer.addEventListener('wheel', () => {
            this.container.removeChild(focusedImageViewer)
        });

        this.container.appendChild(focusedImageViewer)

        const imageClone = image.cloneNode(true);

        focusedImageViewer.appendChild(imageClone);
    }
}
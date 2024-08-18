//TODO: zoom in and out if clicked


export class Gallery {
    constructor(galleryID, collumnNumber) {
        this.galleryID = galleryID;
        this.collumnNumber = collumnNumber;
        this.container = document.getElementById(galleryID);
        this.imageContainer = this.container.children[0];

        if (!this.container) return
        if (!this.imageContainer) return

        this.createCollumns();
    }

    createCollumns() {
        for (let i = 0; i < this.collumnNumber; i++) {
            const collumn = document.createElement('div');
            collumn.classList.add('collumn');
            this.imageContainer.appendChild(collumn);
        }

        this.addImages()
    }

    addImages() {
        const dataFileName = `/data/${this.galleryID}.json`;

        fetch(dataFileName)
        .then(response => response.json())
        .then(imageData => {
            let collumnList = this.imageContainer.children;
            let index = 0;
            imageData.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.altText; 
                img.addEventListener('click', (e) => this.handleImageClicked(e.target));
                if (index % 2 == 0) {
                    collumnList[0].appendChild(img);
                }
                else if (index % 2 == 1) {
                    collumnList[1].appendChild(img);
                }
                index++;
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
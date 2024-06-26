const fs = import('fs');
const path = import('path');

const folderPath = 'photos/szabadteri'

function getAllFileNames(folderPath) {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        return console.error('Unable to scan directory: ' + err);
      }
  
      console.log('Files found:', files);
    });
}

getAllFileNames(folderPath);

// function fillGalleryBlock() {
//     let collumns = document.querySelectorAll('.collumn');
//     let photos = 


    // collumns.forEach(collumn => {
        
    // });
    

// }
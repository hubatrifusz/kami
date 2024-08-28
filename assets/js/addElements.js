function addHeader() {
    fetch('elements/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
}

function addFooter(){
    fetch('elements/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', addHeader);
document.addEventListener('DOMContentLoaded', addFooter);
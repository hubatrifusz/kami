function addHeaderAndFooter() {
    fetch('pages/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

    fetch('pages/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', addHeaderAndFooter);
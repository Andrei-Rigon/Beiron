let loadingContainer = document.getElementById('loading-container');

setTimeout(function() {
    loadingContainer.classList.add("fade-out");
    setTimeout(() => {
        loadingContainer.style.display = "none";
    }, 500); // Espera a transição terminar
}, 1400);
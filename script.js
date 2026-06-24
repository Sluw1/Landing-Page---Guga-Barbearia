const imagens = document.querySelectorAll('.grid-galeria img');
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        imgAmpliada.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
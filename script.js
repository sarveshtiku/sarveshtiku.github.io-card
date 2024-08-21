window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = 'scale(0.9)';
    container.style.transition = 'opacity 2s ease-out, transform 2.5s ease-out';

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'scale(1)';
    }, 500);
});

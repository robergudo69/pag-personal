document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Movimiento de fondo al hacer scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.blob-1').style.transform = `translate(${scrolled * 0.15}px, ${scrolled * 0.1}px)`;
        document.querySelector('.blob-2').style.transform = `translate(${-scrolled * 0.1}px, ${-scrolled * 0.1}px)`;
    });

    // Zoom de imágenes del portafolio
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.card img').forEach(img => {
        img.onclick = () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
        }
    });

    const close = () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    };

    closeBtn.onclick = close;
    modal.onclick = (e) => { if(e.target === modal) close(); };
});
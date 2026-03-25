// ========================================
// Zorgt dat de aarbol langzaam vervaagd
// ========================================
const aarde = document.querySelector('.earth-image');

window.addEventListener('scroll', () => {
    const scrollAfstand = window.scrollY;
    const verdwijnPunt = 1800; //na 1800px is die helemaal vervaagd
    let nieuweOpacity = 1 - (scrollAfstand / verdwijnPunt);

    if (nieuweOpacity < 0) {
        nieuweOpacity = 0;
    }
    aarde.style.opacity = nieuweOpacity
})



const blackHole = document.querySelector('.black-hole');

blackHole.addEventListener('click', () => {
    const bhRect = blackHole.getBoundingClientRect();
    const elements = document.querySelectorAll('body *:not(.black-hole)');

    // Voeg klasse voor pulse animatie
    blackHole.classList.add('clicked');

    // Opslokken van alle elementen
    elements.forEach(el => {
        const elRect = el.getBoundingClientRect();
        const deltaX = bhRect.left + bhRect.width/2 - (elRect.left + elRect.width/2);
        const deltaY = bhRect.top + bhRect.height/2 - (elRect.top + elRect.height/2);

        el.style.transition = 'transform 5s ease-in, opacity 5s ease-in';
        el.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
        el.style.opacity = '0';
    });

    // Laat de black hole zelf ook groeien langzaam
    blackHole.style.transition = 'transform 5s ease-in';
    blackHole.style.transform = 'scale(3)';

    // Voeg class voor body zodat alle elementen opslokken
    document.body.classList.add('sucked');

    // Na 5s de pagina “sluiten” (redirect naar about:blank)
    setTimeout(() => {
        window.location.href = 'about:blank';
    }, 5000);
});
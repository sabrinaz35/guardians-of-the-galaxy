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

// const viewer = document.getElementById('satellite-viewer');

// viewer.addEventListener('load', () => {
//     viewer.addEventListener('click', (e) => {
//         const hit = viewer.positionAndNormalFromPoint(e.clientX, e.clientY);
//         if (hit) {
//             console.log(`data-position="${hit.position.x.toFixed(3)} ${hit.position.y.toFixed(3)} ${hit.position.z.toFixed(3)}" data-normal="${hit.normal.x.toFixed(3)} ${hit.normal.y.toFixed(3)} ${hit.normal.z.toFixed(3)}"`);
//         }
//     });
// });

document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
        hotspot.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
});







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

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

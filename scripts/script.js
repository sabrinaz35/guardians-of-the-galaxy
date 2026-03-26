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

// deze code gegenereerd om de data positions te vinden van de 3d element met prompt; "hoe kan ik punten van mijn 3d element vinden om te gebruiken voor popovers etc"
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





// sound effect bron; https://pixabay.com/sound-effects/search/wind%20storm%20slowly%20fading%20away/
const soundEffect = new Audio('audios/soundeffect-blackhole.m4a');
const blackHole = document.querySelector('.black-hole');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (blackHole) {
    blackHole.addEventListener('click', () => {

        // 👉 ALS reduced motion → geen animatie
        if (prefersReducedMotion) {
            window.location.href = 'error.html';
            return;
        }

        const bhRect = blackHole.getBoundingClientRect();
        const elements = document.querySelectorAll('body *:not(.black-hole)');
        soundEffect.play();

        blackHole.classList.add('clicked');

        elements.forEach(el => {
            const elRect = el.getBoundingClientRect();
            const deltaX = bhRect.left + bhRect.width/2 - (elRect.left + elRect.width/2);
            const deltaY = bhRect.top + bhRect.height/2 - (elRect.top + elRect.height/2);

            el.style.transition = 'transform 5s ease-in, opacity 5s ease-in';
            el.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
            el.style.opacity = '0';
        });

        blackHole.style.transition = 'transform 5s ease-in';
        blackHole.style.transform = 'scale(3)';

        document.body.classList.add('sucked');

        setTimeout(() => {
            window.location.href = 'error.html';
        }, 5000);
    });
}

let text = '';

document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    if (!output) return;

    document.addEventListener('keydown', (e) => {
        // Alleen letters en symbolen verwerken
        if (e.key.length === 1) {
            text += e.key.toUpperCase(); // altijd CAPS
        } else if (e.key === 'Backspace') {
            text = text.slice(0, -1);
        }

        output.textContent = text;

        if (text.endsWith('RESTART') || text.endsWith('HERSTART')) {
            window.location.href = 'index.html';
        }
        if (text.endsWith('CLOSE') || text.endsWith('SLUIT'))  {
            window.location.href = 'about:blank'; // simuleert een gesloten pagina
        }
        if (text.endsWith('SANNE')) {
            const sanne = document.querySelectorAll('.sanne');
            sanne.forEach(el => {
                el.style.opacity = '0.1'; // laag zichtbaar
            });
        }
        else if (text.endsWith('VASILIS')) {
            const vasilis = document.querySelectorAll('.vasilis');
            vasilis.forEach(el => {
                el.style.opacity = '0.1'; // laag zichtbaar
            });
        }
        else if (text.endsWith('CYD')) {
            const cyd = document.querySelectorAll('.cyd');
            cyd.forEach(el => {
                el.style.opacity = '0.1'; // laag zichtbaar
            });
        }
        else if (text.endsWith('JAD')) {
            const jad = document.querySelectorAll('.jad');
            jad.forEach(el => {
                el.style.opacity = '0.1'; // laag zichtbaar
            });
        }
         else if (text.endsWith('MADEBY')|| text.endsWith('MADE BY')|| text.endsWith('GEMAAKT DOOR')
            || text.endsWith('GEMAAKTDOOR')|| text.endsWith('ALIEN')) {
            const madeby = document.querySelectorAll('.madeby');
            madeby.forEach(el => {
                el.style.opacity = '0.2'; // laag zichtbaar
            });
        } else if (text.endsWith('GRU')) {
            const gru = document.querySelector('.gru');
            gru.style.opacity = '0.2';
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
            gru.play()
        } else if (text.endsWith('RAKET')|| text.endsWith('ROCKET')) {
            const raket = document.querySelectorAll('.raket');
            
            raket.forEach(el => {
                el.style.left = '110%';
            });
        }
        else {
            const sanne = document.querySelectorAll('.sanne');
            sanne.forEach(el => {
                el.style.opacity = '0';
            });
            const vasilis = document.querySelectorAll('.vasilis');
            vasilis.forEach(el => {
                el.style.opacity = '0';
            });
            const cyd = document.querySelectorAll('.cyd');
            cyd.forEach(el => {
                el.style.opacity = '0';
            });
            const jad = document.querySelectorAll('.jad');
            jad.forEach(el => {
                el.style.opacity = '0';
            });
            const madeby = document.querySelectorAll('.madeby');
            madeby.forEach(el => {
                el.style.opacity = '0'; // laag zichtbaar
            });
            const gru = document.querySelectorAll('.gru');
            gru.forEach(el => {
                el.style.opacity = '0'; // laag zichtbaar
            });  
        }
    });
});





const raketLink = document.querySelector('.raket-link');
const raketGeluid = document.querySelector('#raket-audio');

if (raketLink) {
    raketLink.addEventListener('click', function(e) {

        e.preventDefault();

        if (raketGeluid) {
            raketGeluid.currentTime = 0;
            raketGeluid.play();
        }

        this.classList.add('lanceren');
        setTimeout(() => {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        }, 590);
        this.addEventListener('animationend', () => {
            this.classList.remove('lanceren');
        }, {once:true});
    })
}
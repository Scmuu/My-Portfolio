// Selettori esistenti per la tua card
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
    card.classList.add("is-active") :
    card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

document.addEventListener('DOMContentLoaded', () => {
    // Verifichiamo che il body esista
    if (!document.body) return;

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        
        // Applichiamo gli stili DIRETTAMENTE via JS per essere sicuri al 100%
        Object.assign(trail.style, {
            position: 'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px',
            width: '12px',
            height: '12px',
            backgroundColor: '#ff5e00',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: '9999999',
            boxShadow: '0 0 10px #ff5e00, 0 0 20px #ffae00',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            opacity: '1'
        });

        document.body.appendChild(trail);

        // Effetto di sparizione immediato dopo il frame di creazione
        requestAnimationFrame(() => {
            trail.style.transform = 'translate(-50%, -50%) scale(0.2)';
            trail.style.opacity = '0';
        });

        // Rimozione dal DOM
        setTimeout(() => {
            trail.remove();
        }, 600);
    });
});
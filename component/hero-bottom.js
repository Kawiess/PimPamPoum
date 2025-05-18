class HeroBottom extends HTMLElement {
    constructor() { super(); }
    static get observedAttributes() { return ['titre', 'lien', 'image']; }
    attributeChangedCallback(name, oldValue, newValue) { this.render(); }
    connectedCallback() {
        const titre   = this.getAttribute('titre') || 'Réservez votre activité';
        const lien    = this.getAttribute('lien')  || './index.html';
        const image   = this.getAttribute('image') || '';
        const styleFond = image
            ? `background-image: url('${image}'); background-size: cover; background-position: center;`
            : `background: linear-gradient(90deg, rgb(96, 91, 241), rgba(96, 91, 241, 0.5));`;
        const enfants = Array.from(this.querySelectorAll('element'));
        const content = enfants.map((el, index) => {
            const classes = ["carousel-item"];
            if (index === 0) classes.push('active');
            return `<div class="${classes.join(' ')}"><p class="fs-5">${el.textContent}</p></div>`;
        }).join('');
        this.innerHTML = `
            <style>
                .hero-bas {
                    ${styleFond}
                    color: white;
                }
                .carousel-item p {
                    color: white;
                }
                .bouton-hero {
                    text-decoration: none;
                    display: inline-block;
                    background-color: #FE8A24 !important;
                    color: white !important;
                    border: none;
                    transition: all 0.3s ease;
                    padding: 10px 30px;
                    font-size: 1.25rem;
                    z-index: 2;
                }
            </style>
            <section class="text-center py-5 hero-bas">
                <div class="container">
                    <h2 class="fw-bold mb-4">${titre}</h2>
                    <div id="textCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${content}
                        </div>
                    </div>
                    <a href="${lien}" class="btn bouton-hero btn-lg mt-4">Réserver</a>
                </div>
            </section>
        `;
    }
}

// Enregistrement de la balise personnalisée.
customElements.define('hero-bottom', HeroBottom);

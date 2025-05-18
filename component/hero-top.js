class HeroTop extends HTMLElement {
    constructor() { super(); }
    static get observedAttributes() { return ['titre', 'image', 'lien']; }
    attributeChangedCallback(name, oldValue, newValue) { this.render(); }
    connectedCallback() {
        const titre = this.getAttribute('titre') || 'Activité';
        const image = this.getAttribute('image') || '';
        const lien  = this.getAttribute('lien')  || './index.html';
        this.innerHTML = `
            <style>
                .hero {
                    margin-top: 0;
                    padding-top: 70px;
                    margin-bottom: 20px;
                    width: 100%;
                    height: 50vh;
                    position: relative;
                    background-image: url('${image}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;
                }
                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    z-index: 1;
                }
                .titre-hero {
                    margin-right: 5%;
                    font-size: 3rem;
                    color: white;
                    text-align: right;
                    font-weight: bold;
                    z-index: 2;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }
                .bouton-hero {
                    margin-top: 20px;
                    margin-right: 5% !important;
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
            <section class="hero">
                <p class="titre-hero">${titre}</p>
                <a href="${lien}" class="btn btn-lg bouton-hero">Réserver</a>
            </section>
        `;
    }
}

// Enregistrement de la balise personnalisée.
customElements.define('hero-top', HeroTop);

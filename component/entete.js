class Entete extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        this.innerHTML = `
            <meta charset="utf-8" />
            <title>Gîte Pim</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Site du gîte de Pim sur l'^le de Pam près de Poum.">
            <meta name="author" content="GBL">
            <meta name="robots" content="index, follow">
            
            <!-- Styles internes -->
            <link rel="icon" type="image/x-icon" href="./public/logo.ico" />
            <link rel="stylesheet" href="./css/main.css" />

            <!-- Styles externes -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            
            <!-- Scripts nécessaires -->
            <script src="./components/navbar.js" type="text/javascript" defer></script>
            <script src="./components/footer.js" type="text/javascript" defer></script>
        `;
    }
}

// Enregistrement de la balise personnalisée.
customElements.define('entete', Entete);

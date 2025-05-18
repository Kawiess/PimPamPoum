// HERO COMPONENT
function renderHeroComponents() {
	document.querySelectorAll('section.hero').forEach(el => {
		const title = el.dataset.title || "Titre par défaut";
		const image = el.dataset.image || "./assets/img/default.jpg";
		const alt = el.dataset.alt || "Image";
		el.innerHTML = `
			<figure class="hero-container">
				<img src="${image}" alt="${alt}" class="hero-image">
				<figcaption class="hero-overlay">
					<h1 class="hero-title">${title}</h1>
				</figcaption>
			</figure>
		`;
	});
}

// BUTTONS COMPONENT
function renderButtonComponents() {
	document.querySelectorAll('[data-button]').forEach(btn => {
		const type = btn.dataset.button; // "info", "reserve", "confirm", "cancel"
		const labels = {
			info: '+ d\'infos',
			reserve: 'Réserver',
			confirm: 'Confirmer',
			cancel: 'Annuler'
		};
		const classes = {
			info: 'btn btn-blue',
			reserve: 'btn btn-orange',
			confirm: 'btn btn-green',
			cancel: 'btn btn-red'
		};
		btn.className = classes[type] || 'btn';
		btn.innerText = labels[type] || 'Bouton';
		btn.setAttribute('role', 'button');
		btn.setAttribute('aria-label', labels[type] || 'Bouton');
	});
}

// TOAST COMPONENT
function showToast(message, type = "info") {
	const toast = document.createElement("aside");
	toast.className = `toast toast-${type}`;
	toast.setAttribute('role', 'status');
	toast.setAttribute('aria-live', 'polite')
	toast.innerText = message;
	document.body.appendChild(toast);
	setTimeout(() => {
		toast.classList.add("visible");
	}, 100);
	setTimeout(() => {
		toast.classList.remove("visible");
		toast.addEventListener("transitionend", () => toast.remove());
	}, 3000);
}

// CAROUSEL COMPONENT
function renderCarouselComponents() {
	document.querySelectorAll('section.carousel').forEach(el => {
		const images = JSON.parse(el.dataset.images || "[]");
		if (!images.length) return;
		const indicators = images.map((_, i) => `<button class="dot" data-index="${i}"></button>`).join('');
		const slides = images.map((src, i) => `<img src="${src}" class="slide ${i === 0 ? 'active' : ''}" alt="Slide ${i+1}">`).join('');
		el.innerHTML = `
			<div class="carousel-container">
				<div class="carousel-slides">${slides}</div>
				<nav class="carousel-indicators">${indicators}</nav>
			</div>
		`;
		const slideElems = el.querySelectorAll('.slide');
		const dots = el.querySelectorAll('.dot');
		dots.forEach(dot => {
			dot.addEventListener('click', () => {
				const index = parseInt(dot.dataset.index);
				slideElems.forEach((img, i) => {
					img.classList.toggle('active', i === index);
				});
			});
		});
	});
}

// INIT ALL COMPONENTS
function initComponents() {
	renderHeroComponents();
	renderButtonComponents();
	renderCarouselComponents();
}
document.addEventListener("DOMContentLoaded", initComponents);

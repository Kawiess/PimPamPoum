document.addEventListener('DOMContentLoaded', () => {
	fetch('./components/navbar.html').then(r => r.text())
		.then(html => document.getElementById('navbar').innerHTML = html);
	fetch('./components/footer.html').then(r => r.text())
		.then(html => document.getElementById('footer').innerHTML = html);
	fetch('./components/hero.html').then(r => r.text())
		.then(html => document.getElementById('hero').innerHTML = html);
});

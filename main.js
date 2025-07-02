let menuBtn = document.querySelector('.menu-btn');
let navBurger = document.querySelector('.nav-burger');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	navBurger.classList.toggle('active');
})
window.addEventListener('click', function (e) {
	// e.preventDefault()
	if (!e.target.matches('.menu-btn')) {
		if (navBurger.classList.contains('active')) {
			navBurger.classList.remove('active');
			// menuBtn.classList.remove('active')
		}
		menuBtn.classList.remove('active')
		// navBurger.classList.remove('active');
		// menuBtn.classList.remove('active')
		console.log('click')
	}
})

// Slider
let sliderNext = document.querySelector('.services__next');
let sliderPrev = document.querySelector('.services__prev');

sliderNext.addEventListener('click', function () {
	let items = document.querySelectorAll('.services__item')
	document.querySelector('.slider').appendChild(items[0])
})
sliderPrev.addEventListener('click', function () {
	let items = document.querySelectorAll('.services__item')
	document.querySelector('.slider').prepend(items[items.length - 1])
})


const gap = 16;

const carousel = document.querySelector('.carousel'),
	content = document.querySelector('.content'),
	next = document.querySelector('.next'),
	prev = document.querySelector('.prev');

next.addEventListener('click', e => {
	carousel.scrollBy(width + gap, 0);
	if (carousel.scrollWidth !== 0) {
		prev.style.display = 'flex';
	}
	if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
		next.style.display = "none";
	}
});
prev.addEventListener('click', e => {
	carousel.scrollBy(-(width + gap), 0);
	if (carousel.scrollLeft - width - gap <= 0) {
		prev.style.display = 'none';
	}
	if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
		next.style.display = 'flex';
	}
});

let width = carousel.offsetWidth;
window.addEventListener('resize', e => (width = carousel.offsetWidth));

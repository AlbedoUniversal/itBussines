const cross = document.querySelector('.whatLocalization__cross');
const text = document.querySelectorAll('.whatLocalization__text');
const links = document.querySelectorAll('.whatLocalization__link');

window.scrollTo({
	top: 1000,
	behavior: 'smooth',
});

cross.addEventListener('click', (e) => {
	e.preventDefault();

	text.forEach((el) => {
		el.style.animation = 'callBack 1s forwards';
	});

	e.currentTarget.style.animation = 'dissshowcross 1s forwards';
});

export default function () {
	links.forEach((el) => {
		el.addEventListener('click', (e) => {
			this.document.getElementById('scroll').scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});

	if (window.innerWidth <= 940) {
		links.forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				cross.style.animation = 'showcross 1s forwards';
				cross.style.animationDuration = '1.3s';
				text.forEach((el) => {
					el.style.animation = 'moveLeft 1s forwards';
				});
			});
		});
	}
}

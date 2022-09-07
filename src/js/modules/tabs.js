export function tabs() {
	const cross = document.querySelector('.whatLocalization__cross');
	const text = document.querySelectorAll('.whatLocalization__text');
	const links = document.querySelectorAll('.whatLocalization__link');
	cross.addEventListener('click', (e) => {
		// e.preventDefault();

		text.forEach((el) => {
			el.style.animation = 'callBack 1s forwards';
		});

		e.currentTarget.style.animation = 'dissshowcross 1s forwards';
	});

	links.forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const hash = el.getAttribute('href');
			window.location = hash;
			cross.style.animation = 'showcross 1s forwards';
			cross.style.animationDuration = '1.3s';
			text.forEach((el) => {
				el.style.animationDuration = '5.3s';
				el.style.animation = 'moveLeft forwards';
			});
		});
	});
}

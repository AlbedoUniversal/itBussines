export function tabs() {
	// const cross = document.querySelector('.whatLocalization__cross');
	let hashAddress = window.location.hash;
	if (hashAddress && hashAddress.length > 0) {
		let hasAddressItemID = hashAddress.substring(1);
		if (hasAddressItemID) {
			let contentElement = document.querySelector('#'+hasAddressItemID);
			if (contentElement) {
				let cross = contentElement.querySelector('.whatLocalization__cross');
				if (cross) {
					console.log(cross);
					cross.style.opacity = 1;
				}
			}
		}
	}

	const crosses = document.querySelectorAll('.whatLocalization__cross');

	const text = document.querySelectorAll('.whatLocalization__text');
	const links = document.querySelectorAll('.whatLocalization__link');

	crosses.forEach((el) => {
		el.addEventListener('click', (e) => {
			text.forEach((el) => {
				el.style.animation = 'callBack 1s forwards';
			});

			e.currentTarget.style.animation = 'dissshowcross 1s forwards';
		});
	});

	links.forEach((el, idx) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const hash = el.getAttribute('href');
			window.location = hash;
			crosses[idx].style.animation = 'showcross 1s forwards';
			crosses[idx].style.animationDuration = '1.3s';
			text.forEach((el) => {
				el.style.animationDuration = '5.3s';
				el.style.animation = 'moveLeft forwards';
			});
		});
	});
}

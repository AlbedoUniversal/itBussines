export const setActivePage = () => {

	let current = 0;
	const menuList = document.querySelector('.menu__list-upper');
	const allLinks = menuList.querySelectorAll('.menu__list-link');
	const menuLinks = [];

	for (const link of allLinks) {
		if (link.className === 'menu__list-link') {
			menuLinks.push(link);
		}
	}

	for (let i = 0; i < menuLinks.length; i++) {
		if (menuLinks[i].href === document.URL) {
			current = i;
		}
	}
	menuLinks[current].classList.add('menu__list-link--active');
};

document.addEventListener("DOMContentLoaded", () => {
	setActivePage();
});



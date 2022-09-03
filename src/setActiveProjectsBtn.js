
export const setActiveProjectsBtn = () => {

	let current = 0;

	const allBtns = document.querySelectorAll('.projectChanger__btn');

	for (let i = 0; i < allBtns.length; i++) {
		 console.log(allBtns[i].href);
		if (allBtns[i].href === document.URL) {
			current = i;
		}
	}
	allBtns[current]?.classList.add('projectChanger__btn--active');
};

document.addEventListener("DOMContentLoaded", () => {
	setActiveProjectsBtn();
});



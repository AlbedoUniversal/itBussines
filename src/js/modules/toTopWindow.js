export function toTopWindow() {
	const btn = document.querySelector('.processBlock__button-top');

	btn.addEventListener('click', () => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
}

// Animate smooth scroll - Little help by Ines Serra => http://www.mariainesserra.com

function scrollDown() {
	const y = document.getElementsByTagName('footer')[0].offsetTop;
	window.scroll({
		top: y,
		behavior: 'smooth'
	});
}
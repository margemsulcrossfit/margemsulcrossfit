// Animate smooth scroll - Little help by Ines Serra => http://www.mariainesserra.com

function scrollDown() {
	const y = document.getElementById('infos').offsetTop;
	window.scroll({
		top: y,
		behavior: 'smooth'
	});
}
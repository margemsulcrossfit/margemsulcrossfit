// Animate smooth scroll - Little help by Ines Serra => http://www.mariainesserra.com

function scrollDown() {
	const y = document.getElementById('infos').offsetTop;
	window.scroll({
		top: y,
		behavior: 'smooth'
	});
}

// Random image on page load functions

window.onload = randomPic;

var halterofilismo = ["https://drive.google.com/uc?id=1R35aPC9EdA8k4WHWBmqP402iSOdOVoRi", 
						"https://drive.google.com/uc?id=1IrWFjAwdW1u5ogNMgt6s432EYvfPBLiS",
						"https://drive.google.com/uc?id=12Kf1_h-n7K7BfUEb-jCRyuW6G8rZe4nO",
						"https://drive.google.com/uc?id=1FIapKQGa3RQdz9ygdHP6wnwy2snlbF0b",
						"https://drive.google.com/uc?id=1ESnkhdWJ4xL2NE3w0MBkWWTE8nI69i1d"];

var ginastica = ["https://drive.google.com/uc?id=114SAw3GS4nSMuqlhG9DFONxqt0zHMK0N",
					"https://drive.google.com/uc?id=1u7t2_GDDedidIUFM3KAdjEC_G7Pq734H",
					"https://drive.google.com/uc?id=1Leo3A36S4G9BU1CDURKZSppuR2rk8Tvf",
					"https://drive.google.com/uc?id=17A3x2Cm1tms75s-mPIbva1E1wYkIqdry",
					"https://drive.google.com/uc?id=1Iq1-wuoLCMlQUch9QrNWiwXyabeujh8X",
					"https://drive.google.com/uc?id=1zlCgpeyZ0TWHDBSmXFzAnA0aTNLMKdCk"];

var resistencia = ["https://drive.google.com/uc?id=1vopfFMyenSMo0XRj37uSvrmG0-vTjZeB", 
					"https://drive.google.com/uc?id=1j20mR2ft66B7JzOkSUucu0MQvnqcLQMJ", 
					"https://drive.google.com/uc?id=14ZcxbMZ8JbjTYJPMugA7qtmISGaNCPfc", 
					"https://drive.google.com/uc?id=1ESg04Jx0we0HHWsQ7n_bJARXVczUPlfl"];

var espaco = ["https://drive.google.com/uc?id=1gTphy7hI-yWHuBeM0GarViS6Pf5oIEtK", 
				"https://drive.google.com/uc?id=1Cwpvn71DNzY0YW-BXq-c-FKr_sqJQosz", 
				"https://drive.google.com/uc?id=1239-5lK59tPWCfpmxmDA6An-3OzJWzVg", 
				"https://drive.google.com/uc?id=1enK_4YaZ_jLY1DVNAbwugRFzzb8_ZdFS", 
				"https://drive.google.com/uc?id=16DBWo4dR9OZ8A1ZpD_NqXyc_Q8a7L9EU",
				]; 

function randomPic() {
	var randomNumberHalterofilismo = Math.floor(Math.random() * halterofilismo.length);
	document.getElementById("halterofilismo").src = halterofilismo[randomNumberHalterofilismo];

	var randomNumberGinastica = Math.floor(Math.random() * ginastica.length);
	document.getElementById("ginastica").src = ginastica[randomNumberGinastica];

	var randomNumberResistencia = Math.floor(Math.random() * resistencia.length);
	document.getElementById("resistencia").src = resistencia[randomNumberResistencia];

	var randomNumberEspaco = Math.floor(Math.random() * espaco.length);
	document.getElementById("espaco").src = espaco[randomNumberEspaco];
}

// After 1 minute randomly change the pictures

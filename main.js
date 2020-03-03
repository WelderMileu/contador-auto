(function() {
	'use strict';

	// code ..

	const $ = elem => document.querySelectorAll(elem);
	const play = 200;

	$('[data-count]').forEach(elem => {
		function contar() {
			const data = +elem.getAttribute('data-count');
			const count = +elem.innerText;
			const inc = data / play;
			
			if (count < data) {
				elem.innerText = count + inc;
				setTimeout(contar, 10);
			} else {
				elem.innerText = count;
			}
		}
		contar()
	})
})();
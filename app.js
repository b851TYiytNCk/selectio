document.addEventListener("DOMContentLoaded", function() {
	
	const select = document.querySelector('.select');
	const items = document.querySelectorAll('.select ul li');

	['click', 'touchstart'].forEach( function(event) {
		window.addEventListener(event, function(e) {
			
			if ( e.target === select && !(select.classList.contains('is-open')) ) {
				
				select.classList.add('is-open');

			}

			else if ( Array.from(items).includes(e.target) ) {

				select.querySelector('span').textContent = e.target.textContent;
				select.setAttribute('data-value', e.target.getAttribute('data-value'));

				items.forEach( (el) => {
					if ( el.classList.contains('is-active') ) {
						el.classList.remove('is-active');
					}
				});

				e.target.classList.add('is-active');
				select.classList.remove('is-open');

			} else {
				
				if ( select.classList.contains('is-open') ) select.classList.remove('is-open');
				
			}

		});
	});

});
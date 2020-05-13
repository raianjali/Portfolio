$(document).ready(function() {

	$('#profile_ripples').ripples({
		resolution: 512,
		dropRadius: 10,
	});

	const bars = document.querySelectorAll('.progress_bar');

	//Counter

	const counters = document.querySelectorAll('.counter');
	function runCounter () {
		counters.forEach(counter => {
			counter.innerText = 0;
			let target = +counter.dataset.count;
			let step = target/100;
			let countIt = function() {
				let displayedCount = +counter.innerText;
				if (displayedCount < target) {
					counter.innerText = Math.ceil(displayedCount + step);
					setTimeout(countIt, 1);
				}
				else {
					counter.innerText = target;
				}
			}
			countIt();
		})
	}
	

	let counterSection = document.querySelector('.counter_section, .progress_bar');
	let options = {
		rootMargin : '0px 0px -100px 0px'
	}
	let done = 0;
	const sectionObserver = new IntersectionObserver(function(entries){

		if (entries[0].isIntersecting && done!==1) {
			done = 1;
			runCounter();

			bars.forEach(function(bar){
				let percentage = bar.dataset.percent;
				let tooltip = bar.children[0];
				tooltip.innerText = percentage + '%';
				bar.style.width = percentage + '%';

			});	
	  	}

	}, options)

	sectionObserver.observe(counterSection);


	//Slider

	$('.slider').slick({
		arrows: false,
		autoplay: true,
	});

});
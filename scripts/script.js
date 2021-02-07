$(document).ready(function(){

	// BURGER

	let burger = document.getElementById("burger");
	let list = document.getElementById("list");
	burger.onclick = function() {
		burger.classList.toggle("_active");
		list.classList.toggle("_active");
	}
	
	headerLinks = document.querySelectorAll('.header__link a');
	
	for(let index = 0; index < headerLinks.length; index++)
	{
		headerLink = headerLinks[index];

		headerLink.addEventListener('click', function() {
			burger.classList.toggle("_active");
			list.classList.toggle("_active");
		});
	}
	
	// CONVERT FROM IMAGE TO BACKGROUND-IMAGE

	function bgi(){
		let bgi=document.querySelectorAll(".bgi");
		for (var i = 0; i < bgi.length; i++) {
			if(bgi[i].querySelector('img')){
				bgi[i].style.backgroundImage = 'url('+bgi[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}	
	bgi();


	// CLEARING PLACEHOLDER AFTER FOCUS

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});


	// SLIDER 

	$('.slider-text').slick ({
		arrows: false,
		slidesToShow: 1,
		fade: true,
		infinite: false,
		draggable: false,
		asNavFor: ".slider-image",
	});

	$('.slider-image').slick({
		nextArrow: '<div class="slick-next button"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px" viewBox="0 0 11 20" version="1.1"><g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#fff"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" id="arrow_right-[#336]"/></g></g></g></svg></span></div>',
		prevArrow: '<div class="slick-prev button"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px" viewBox="0 0 11 20" version="1.1"><g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#fff"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" id="arrow_right-[#336]"/></g></g></g></svg></span></div>',
		asNavFor: '.slider-text',
		draggable: false,
		centerMode: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// FIX HEADER ROW

	const headerWrapperRow = $('.header__wrapper1-row');
	const headerRowOffset = $('.header__row').offset().top;
	
	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();
		
		if(scrolled > headerRowOffset) 
			headerWrapperRow.addClass('fixed');
		else if (scrolled <= headerRowOffset)
			headerWrapperRow.removeClass('fixed');
	});


	// PRESSED BTNS	

	const btns = document.querySelectorAll('.button');
	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			btn.classList.toggle('pressed');	
			setTimeout(function() {
				btn.classList.remove('pressed');
			}, 300);
		});
	});

	
	
	// POPUP

	const openPPs = document.querySelectorAll('.pp');
	const popup = document.querySelector('.popup');
	const popupBody = document.querySelectorAll('.popup__body');
	const body = document.querySelector('body');
	const closePP = document.querySelector('.close-popup');
	let paddingToFixBody = (window.innerWidth - document.querySelector('.page-wrapper').offsetWidth) + 'px';
	const headerWrapper2Row = document.querySelector('.header__wrapper2-row');
	const headerWrapper1Row = document.querySelector('.header__wrapper1-row');

	for (let index = 0; index < openPPs.length; index++) {

		const openPP = openPPs[index];

		openPP.addEventListener('click', function () {
			if (burger.classList.contains("_active")) {
				burger.classList.toggle("_active");
				menu.classList.toggle("_active");
			}

			popup.classList.add('_active');
			body.style.overflow = 'hidden';
			document.querySelector('.page-wrapper').style.paddingRight = paddingToFixBody;
			
			if (headerWrapper1Row.classList.contains("fixed"))
				headerWrapper2Row.style.paddingRight = paddingToFixBody;
		});
	}

	closePP.addEventListener('click', function () {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		document.querySelector('.page-wrapper').style.paddingRight = '0px';
		headerWrapper2Row.style.paddingRight = '0px';
	});

	popup.addEventListener('click', function (e) {
		if (popup.classList.contains('_active') && e.target == popup) {
			popup.classList.remove('_active');
			body.style.overflow = 'visible';
			document.querySelector('.page-wrapper').style.paddingRight = '0px';
			headerWrapper2Row.style.paddingRight = '0px';
		}
	});

});


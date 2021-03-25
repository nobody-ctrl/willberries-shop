const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

//card
const buttonCard = document.querySelector('.button-cart');
const modalCard = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
const overlay = document.querySelector('.overlay');

const openAndCloseModal = function(){
	modalCard.classList.toggle('show');
}
buttonCard.addEventListener('click', openAndCloseModal);
modalClose.addEventListener('click', openAndCloseModal);
overlay.addEventListener('click', function(event){
	if (event.target.getAttribute('id') == "modal-cart"){
		openAndCloseModal();
	}
});

//scroll smooth

const scrollLink = document.querySelectorAll('a.scroll-link');

for (let i = 0; i < scrollLink.length; i++){
	scrollLink[i].addEventListener('click', function(event){
		event.preventDefault();
		const id = scrollLink[i].getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}



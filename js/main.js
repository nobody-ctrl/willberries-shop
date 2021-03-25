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

//goods
const more = document.querySelector('.more');
const navigationItem = document.querySelectorAll('.navigation-item');
const longGoodsList = document.querySelector('.long-goods-list');

const getGoods = async function(){
	//need data to display in json format
	const result = await fetch('db/db.json');
	return result.json();
}

const createCard = function (objCard){
	const card = document.createElement('div');
	card.className = "col-lg-3 col-sm-6";
	card.innerHTML = `
		<div class="goods-card">
			${objCard.label ? `
			<span class="label">${objCard.label}</span>
			` : ''}
			<img src="db/${objCard.img}" alt="${objCard.name}" class="goods-image">
			<h3 class="goods-title">${objCard.name}</h3>
			<p class="goods-description">${objCard.description}</p>
			<button class="button goods-card-btn add-to-cart" data-id="${objCard.id}">
				<span class="button-price">$ ${objCard.price}</span>
			</button>
		</div>
	`;
	return card;
};

const renderCards = function(data){
	longGoodsList.textContent = '';
	const cards = data.map(createCard);
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods');
};

//send data from func getGoods() to function renderCards()
more.addEventListener('click', function(){
	getGoods().then(renderCards)
});
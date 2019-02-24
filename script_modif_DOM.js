function changeTitles() {
	let titres = document.getElementsByTagName("h1");
	titres[0].innerText = 'Ce que j\'ai appris à THP';

	let item = document.querySelector('h1+p');
	item.innerText = 'THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n\'auront plus de secret pour vous !'
}

changeTitles();


function changeCallToActions() {
	let btns = document.querySelectorAll('section p>a');
	btns[0].innerText = 'OK je veux tester !';
	btns[0].setAttribute('href', 'http://www.thehackingproject.org');
	
	btns[1].innerText = 'Non Merci';
	btns[1].setAttribute('href', 'https://www.pole-emploi.fr/accueil/');
}

changeCallToActions();

function changeLogoName() {
	let strong = document.querySelector('header strong');
	strong.innerText = 'The THP Experience';
	strong.style.fontSize = '2em';
}

changeLogoName();

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	var items = document.querySelectorAll('img.card-img-top');
	for(let i = 0 ; i<items.length ; i++) {
		items[i].style.backgroundImage = 'url("' + imagesArray[i%9] + '")';
		items[i].style.backgroundSize = 'contain';
		items[i].style.backgroundRepeat = 'no-repeat';
		items[i].style.backgroundPosition = 'center center';
		 // mettre une image en SRC quand elles ne sont pas à la bonne dimension, c'est horrible
		 // alors on la met en background-image, et on remplace l'image (src) par une image 1px x 1px transparent. youpi !
		items[i].setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

	}
}

populateImages();

function deleteLastCards() {
	let cards = document.querySelectorAll('div.card');
	for(let i = 1 ; i < 4 ; i++) {
		var lastCard = cards[cards.length - i];
		lastCard.parentNode.removeChild(lastCard);
	}
}

deleteLastCards();

function changeCardsText() {
	let newTexts = ['L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web',
	'Les feuilles de style en cascade, généralement appelées CSS de l\'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML',
	'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C\'est un langage orienté objet à prototype.'];
	let cards = document.querySelectorAll('div.card .card-text');
	for(let i = 0 ; i < 3 ; i++) {
		var card = cards[i];
		card.innerText = newTexts[i];
	}
	
}

changeCardsText();

function changeViewButtons() {
	var btnsView = document.querySelectorAll('.card .btn:first-child');
	for(let i = 0 ; i<btnsView.length ; i++) {
		btnsView[i].classList.add('btn-success');
		btnsView[i].classList.remove('btn-outline-secondary');
	}
}

changeViewButtons();

function PyramideInverse() {
	var maDiv = document.createElement('div');
	maDiv.className = 'row';
	
	var cardJS = document.querySelectorAll('div.row .card')[2].parentNode;
	document.querySelector('.album>.container').appendChild(maDiv);
	maDiv.appendChild(cardJS);
}

PyramideInverse();

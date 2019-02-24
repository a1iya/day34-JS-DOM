{
	console.log("%cCombien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.", 'color: #0098ee');
	let nbP = document.getElementsByTagName('p');
	console.log('-> il y a ' + nbP.length + ' éléments <p>');
}


{
	console.log("%cQuel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.", 'color: #0098ee');
	console.log('-> '+document.getElementById('coucou').textContent);
}

{
	console.log("%cQuelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.", 'color: #0098ee');
	console.log('-> ' + document.getElementsByTagName('a')[2]['href']);
}

{
	console.log("%cCombien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.", 'color: #0098ee');
	console.log('-> ' + document.querySelectorAll('.compte-moi').length);
}
{
	console.log("%cCombien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.", 'color: #0098ee');
	console.log('-> ' + document.querySelectorAll('li.compte-moi').length);
}
{
	console.log("%cCombien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.", 'color: #0098ee');
	console.log('-> ' + document.querySelectorAll('ol li.compte-moi').length);
}

{
	console.log("%cChercher le contenu d'un LI invisible présent dans une UL elle-meme dans une DIV", 'color: #0098ee');
	console.log(document.querySelectorAll('div ul')[1].querySelectorAll('li')[0].textContent);
}


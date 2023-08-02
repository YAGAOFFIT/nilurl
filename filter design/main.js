
const list = document.querySelector(".search-tag__btn");
list.addEventListener('click', () =>{
	let svg = document.getElementById("icon");
	let tag = document.querySelector(".search-tag__list");
	if ( svg.classList.contains('rotate90') ){
		svg.classList.remove('rotate90')
		tag.style.display = "none";
	} else{
		svg.classList.add('rotate90');
		tag.style.display = "grid";
	}
})




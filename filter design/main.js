
const btn_tag = document.querySelector(".search-tag__btn");
const svg = document.getElementById("icon");
const tag_list = document.querySelector(".search-tag__list");
const add = document.querySelector(".search-tag__btn_add");
const link = document.querySelector('search-tag__list');
const link_item = document.querySelector('#link_item');
const col_link = 8;

btn_tag.addEventListener('click', () =>{
	if ( svg.classList.contains('rotate180') ){		
		AddTagList_Close()
	}else{
		OpenTagList()
	}
});

add.addEventListener('click', () =>{
		if(document.getElementById('open')== null){
		AddTagList_Open();
	}else{
		alert('выполнено');
	}
});

// list_item.addEventListener('click', ()=>{
//  close.log("ghj")
// });

// item.addEventListener('onmouseover', () =>{
// 	link.classList.toggle('search-tag__list_item_inp-tag');
// })

OpenTagList = () => {
	// if ( !svg.classList.contains('rotate180') ){		
		if ( svg.classList.contains('rotate90') ){
			svg.classList.remove('rotate90');
			tag_list.style.display = "none";
		} else{
			svg.classList.add('rotate90');
			tag_list.style.display = "grid";
		}
	// }
};

AddTagList_Open = () => {
	svg.classList.add('rotate180');
	svg.classList.remove('rotate90');
	let tag_name = document.getElementById("name");
	tag_name.parentNode.removeChild(tag_name);
	const input = document.createElement('input');
	input.id = 'inp-link';
	input.placeholder = 'Название';
 	btn_tag.after(input);
	svg.classList.add('#')
	add.innerHTML = "Ok";
	tag_list.style.display = "none";
	add.id = 'open';
	CreateLink();
};
AddTagList_Close = () => {
	svg.classList.remove('rotate180');
	add.innerHTML = "Добавить";
	add.removeAttribute('id');
	tag_list.style.display = "none";
	const h4 = document.createElement('h4');
	h4.id = 'name';
	h4.innerHTML = ('Тeги');
	const tag_name = document.getElementById("tag_name");
	tag_name.appendChild(h4);
	const inp = document.querySelector('#inp-link');
	inp.remove();
	const fragment = document.querySelector('#tag__list');
	fragment.remove();
}

CreateLink = () => {
	// node = document.getElementById('frag');
	// node.insertAdjacentHTML('afterend', '<div>Sample Div</div>');
	const node = document.querySelector('#frag');
	const frag = document.createElement('div');
	frag.id = 'tag__list';
	frag.style.display = "grid";

	for (let i = 0; i < col_link;i++){

		const link = document.createElement('input');
		link.classList.add('search-tag__list_item_inp');
		link.type = 'radio';
		
		const label = document.createElement('label');
		label.classList.add('search-tag__list_item_name');
		label.textContent = ('https://itchief.ru/javascript/create-and-append-elements');
		
		const item = document.createElement('button');
		item.id = i;
		item.classList.add('link_item');
		item.appendChild(link);
		item.appendChild(label);
		
		frag.appendChild(item);
	}

	node.appendChild(frag)
// 	const conteiner = document.querySelector("search-tag");
// const fragment = document.createElement("div");
// conteiner.appendChild(fragment);
}

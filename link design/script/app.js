
const list = document.querySelector(".function");
list.addEventListener('click', () =>{
 	let edit = document.querySelector("#edit"); 
	 if ( edit.classList.contains('open') ){
		 edit.style.display = "block";
		 edit.classList.remove('open')
		} else{
		edit.style.display = "none";
		edit.classList.add('open');
	}
})



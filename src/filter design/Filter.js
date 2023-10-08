import { useState } from "react";
import "./Filters.css";


function Filters() {
	const [isOpen, setOpen] = useState(false);
	const [isOpenTag, setOpenTag] = useState(false);
	return (
		// <div className="search">
			<div className="search-iner">
				<div className="search-iner__link">
					<div className="search-iner__link_name">
						<h3>Фильтр ссылок</h3>
					</div>
					<div className="search-iner__input">
						<div className="search-iner__input_icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
							</svg>
						</div>
						<input type="text" className="search-filter__inp" placeholder="Поиск..." value="" />
					</div>
				</div>
				<fieldset className="search-tag" id="frag">
					<div className="search-tag__name" >
						<button className="search-tag__btn" id="tag_name" onClick={() => setOpen(!isOpen)}>
							<svg id="icon" className={`null   ${isOpen ? "rotate90" : ""} ${isOpenTag ? "rotate180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
							<input id="inp-link" placeholder="Название" style={{ display: `${isOpenTag ? "grid" : "none"}` }} />
							<h4 id="name" style={{ display: `${isOpenTag ? "none" : "grid"}` }}>Теги</h4>
						</button>
						<button className="search-tag__btn_add" onClick={() => setOpenTag(!isOpenTag)}>Добавить</button>
					</div>
					{/* таблица ссылок */}
					<div className="search-tag__list" style={{ display: `${isOpen ? "grid" : "none"}` }} >
						<button className="search-tag__list_item">
							<input id="dub.sh" name="dub.sh" type="radio" className="search-tag__list_item_inp-tag" checked="" />
							<label for="dub.sh" className="search-tag__list_item_name">
								<p>Показать все</p>
							</label>
						</button>
						<button className="search-tag__list_item">
							<input id="dub.sh" name="dub.sh" type="radio" className="search-tag__list_item_inp-tag" checked="" />
							<label for="dub.sh" className="search-tag__list_item_name">
								<p>dub.sh</p>
							</label>
						</button>
					</div>
					{/* таблица тегов */}
					<div id="tag__list" style={{ display: `${isOpenTag ? "grid" : "none"}` }}>
						<button id="0" className="link_item">
							<input className="search-tag__list_item_inp" type="radio" />
							<label className="search-tag__list_item_name">https://itchief.ru/javascript/create-and-append-elements</label>
						</button>
						<button id="1" className="link_item">
							<input className="search-tag__list_item_inp" type="radio" />
							<label className="search-tag__list_item_name">https://itchief.ru/javascript/create-and-append-elements</label>
						</button><button id="2" className="link_item">
							<input className="search-tag__list_item_inp" type="radio" />
							<label className="search-tag__list_item_name">https://itchief.ru/javascript/create-and-append-elements</label>
						</button>
						<button id="3" className="link_item">
							<input className="search-tag__list_item_inp" type="radio" />
							<label className="search-tag__list_item_name">https://itchief.ru/javascript/create-and-append-elements</label>
						</button>
					</div>
				</fieldset>
			</div>
		// </div>
	);
}

export default Filters;

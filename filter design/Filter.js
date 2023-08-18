

function Filter() {
  return (
<div className="search">

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
						<input type="text" className="search-filter__inp" placeholder="Поиск..." value=""/>
					</div>
				</div>
	
				<fieldset className="search-tag" id="frag">
					<div className="search-tag__name" >
						<button className="search-tag__btn" id="tag_name">
							<svg id="icon" className="null" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
								<polyline points="9 18 15 12 9 6"></polyline>
							</svg>
							<h4 id="name">Теги </h4>
						</button>
						<button className="search-tag__btn_add">Добавить</button>
					</div>
					<div className="search-tag__list">
	
						<button className="search-tag__list_item">
							<input id="dub.sh" name="dub.sh" type="radio" className="search-tag__list_item_inp-tag" checked=""/>
							<label for="dub.sh" className="search-tag__list_item_name">
								<p>dub.sh</p>
							</label>
						</button>
						<button className="search-tag__list_item">
							<input id="dub.sh" name="dub.sh" type="radio" className="search-tag__list_item_inp-tag" checked=""/>
							<label for="dub.sh" className="search-tag__list_item_name">
								<p>dub.sh</p>
							</label>
						</button>
						
					</div>
				</fieldset>
			</div>
	</div>

	);
}

export default Filter;

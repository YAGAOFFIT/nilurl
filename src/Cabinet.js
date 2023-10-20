import Filters from "./filter design/Filter";
import Link from "./link design/link";



function Cab() {
  return (
    <div id="wrapper" class="wrapper">
      <header>
        <div id="header-border">
          <div id="header-container" class="container">
            <div id="profile-container" class="profile-container">
              <div id="logo-container">
                {/* <div id="logo">logo</div> */}
                <img id="logo" src="img/Cabinet/svg189-tamq.svg" alt="SVG189" class="frame-svg3" />
                <img id="slash-after-logo" src="img/Cabinet/svgmargin1019-g2i.svg" alt="SVGmargin192" class="frame-sv-gmargin1" />
                <span class="initial-letter">A</span>
                <img id="circle-for-user-letter" src="img/Cabinet/circle.png" class="frame-svg3" />
                <div id="profile-text">Название профиля</div>
                {/* <img id="arrows-after-profile-name" src="images/svg1104-118w.svg" alt="SVG1104" class="frame-svg4"/> */}
              </div>
              <div id="logo-with-dot-container">
                <span class="initial-letter">A</span>
                <img id="circle-for-user-letter-with-dot" src="img/Cabinet/circle-with-dot.png" class="frame-svg3" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div id="main-border">
          <div id="main-container" class="container">
            <div id="links-container">
              <div><h1 id="my-links">Мои ссылки</h1></div>
              <button class="links-button">
                <div class="create-link-text">Создать ссылку</div>
                <div class="create-link-icon">C</div>
              </button>
            </div>
          </div>
        </div>

        <div id="sorting-container" class="container">
          <div id="sorting-container" class="container row-reverse">
            <div class="wrapper-for-sorting-select">
              <svg id="svg-of-sorting" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" height="24" class="h-4 w-4 shrink-0"><path d="M15 18H3M21 6H3M17 12H3"></path></svg>
              <select name="" id="select-of-sorting-type">
                <option disabled selected>Сортировать</option>
                <option value="date">по дате</option>
                <option value="name">по имени</option>
              </select>
            </div>

          </div>
        </div>

        <div id="content-container" class="container">
            <Filters />
          <div id="left-content" style={{ display: "none" }}>
          </div>

          <div id="right-content">
          <Link/>
            <div style={{ display: "none" }}>
              <h2 id="result-of-searching-links">
                Ссылок не найдено
              </h2>
              <div>
                <img src="img/Cabinet/1.png" alt="callwaitingsvg169" class="frame-callwaitingsvg" />
              </div>
              <div id="button-wrapper">
                <button id="second-button-for-creation-link">
                  <div class="create-link-text">Создать ссылку</div>
                  <div class="create-link-icon">C</div>
                </button>
              </div>
              <p id="message-for-user">или поменяйте параметры фильтра</p>
            </div>

          </div>

        </div>
      </main>
    </div>


  );
}

export default Cab;
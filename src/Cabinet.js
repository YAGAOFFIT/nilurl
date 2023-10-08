import "./Cabinet.css";
import Filters from "./filter design/Filter";
import Link from "./link design/Link";

function Cab() {
  return (
    <div id="wrapper" className="wrapper">
      <header>
        <div id="header-border">
          <div id="header-container" className="container">
            <div id="profile-container" className="profile-container">
              <div id="logo-container">
                {/* <div id="logo">logo</div> */}
                <img id="logo" src="./img/svg189-tamq.svg" alt="SVG189" className="frame-svg3" />
                <img id="slash-after-logo" src="./img/svgmargin1019-g2i.svg" alt="SVGmargin192" classNameName="frame-sv-gmargin1" />
                <span className="initial-letter">A</span>
                <img id="circle-for-user-letter" src="./img/circle.png" className="frame-svg3" />
                <div id="profile-text">Название профиля</div>
                {/* <img id="arrows-after-profile-name" src="images/svg1104-118w.svg" alt="SVG1104" className="frame-svg4"/> */}
              </div>
              <div id="logo-with-dot-container">
                <span className="initial-letter">A</span>
                <img id="circle-for-user-letter-with-dot" src="./img/circle-with-dot.png" className="frame-svg3" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div id="main-border">
          <div id="main-container" className="container">
            <div id="links-container">
              <div><h1 id="my-links">Мои ссылки</h1></div>
              <button className="links-button">
                <div className="create-link-text">Создать ссылку</div>
                <div className="create-link-icon">C</div>
              </button>
            </div>
          </div>
        </div>

        <div id="sorting-container" className="container">
          <div id="sorting-container" className="container row-reverse">
            <div className="wrapper-for-sorting-select">
              <svg id="svg-of-sorting" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4 shrink-0"><path d="M15 18H3M21 6H3M17 12H3"></path></svg>
              <select name="" id="select-of-sorting-type">
                <option disabled selected>Сортировать</option>
                <option value="date">по дате</option>
                <option value="name">по имени</option>
              </select>
            </div>

          </div>
        </div>

        <div id="content-container" className="container">

          <div id="left-content">
            <Filters/>
          </div>

          <div id="right-content">
            <Link/>
            <div style={{display:"none"}}>
              <h2 id="result-of-searching-links">
                Ссылок не найдено
              </h2>
              <div>
                <img src="./img/1.png" alt="callwaitingsvg169" className="frame-callwaitingsvg" />
              </div>
              <div id="button-wrapper">
                <button className="links-button">
                  <div className="create-link-text">Создать ссылку</div>
                  <div className="create-link-icon">C</div>
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
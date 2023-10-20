import "./Regest.css";

function Reges() {
    return (
        <div className="d1">
            <div className="d2_1">
            <div class="slider-thumb"></div>
                {/* <div className="d2_11"></div>
                <div className="d2_12"></div>
                <div className="d2_13"></div> */}
            </div>
            <div className="d2_2">
                <div className="d3_1">
                    <a href="https://nil-agency.ru" className="a3_1">
                        <image />
                        <img src="/img/reg/nil logo icon.svg" width={40} />
                        {/* <svg width="191" height="191" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg" className="sv3">

                            <g clip-path="url(#clip0_1301_107)">

                                <path fill-rule="evenodd" clip-rule="evenodd" d="M122 -14H144 9.17859 129.788 5.96937 122 3.72462V-14ZM122 3.72462C113.586 1.29941 104.695 0 95.5 0C42.7568 0 0 42.7568 0 95.5C0 148.243 42.7568 191 95.5 191C148.243 191 191 148.243 191 95.5C191 60.462 172.131 29.8311 144 13.2146V100V148H122V140.897C114.258 146.018 104.977 149 95 149C67.938 149 46 127.062 46 100C46 72.938 67.938 51 95 51C104.977 51 114.258 53.982 122 59.1034V3.72462Z" fill="currentColor" shape-rendering="geometricPrecision">
                                </path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1301_107">
                                    <rect width="191" height="191" rx="95.5" fill="white">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg> */}
                    </a>
                    <h3 className="h3">Регистрация в NILUrl</h3>
                    <p className="p1">Начните создавать короткие ссылки.</p>
                </div>
                <div className="d3_2">
                    
                    <form className="f3_1">

                    <input type="text" data-t="field:input-login" dir="ltr" aria-invalid="false" autocorrect="off" autocapitalize="off" autocomplete="username" class="in3_1" id="passp-field-login" name="login" placeholder="Имя пользователя" value=""/>
                        {/* <button type="button" className="b4">
                            <p className="p4">Continue with Email</p>
                        </button> */}
                    </form>
                    <form className="f3_2">
                    <input type="text" data-t="field:input-login" dir="ltr" aria-invalid="false" autocorrect="off" autocapitalize="off" autocomplete="username" class="in3_1" id="passp-field-login" name="login" placeholder="email" value=""/>

                        {/* <button type="button" className="b5">
                            <p className="p5">Continue with SAML SSO</p>
                        </button> */}
                    </form>
                    <button type="button" className="b3">
                        <p className="p2">Зарегистрироваться</p>
                    </button>
                    <p className="p3_1">Уже имеете аккаунт?
                        <a className="a3_2" href="/register">Войти</a>
                        .</p>
                </div>
            </div>
        </div>
    );
}

export default Reges
import { socialLinkButtons } from "../utils/socialLinkButtons";

export default function Header() {
  const socialLinks = socialLinkButtons();

  return (
    <div className="bg-primary text-light py-3">
      <header className="container-fluid">
        <div className="row">
          <div className="col-xxxl-10 offset-xxxl-1">
            <div className="row mt-xxxl-3 mb-1 mb-xxxl-3">
              <div className="col-xl-8 col-xxl-7 col-xxxl-6 vstack">
                <h1 className="h2">
                  <a
                    href="./"
                    className="hstack gap-2 align-items-start align-items-md-end link-light link-underline link-underline-opacity-50 gap-4 link-offset-1"
                  >
                    <i className="bi bi-mortarboard display-3"></i>
                    <span>{import.meta.env.VITE_APP_META_TITLE}</span>
                  </a>
                </h1>
                <p className="lead mb-1 mb-xl-3">
                  Интерактивна верзија на{" "}
                  <a
                    title="Отворете ја страницата „Листа на активни регистри“ на Министерство за образование и наука на Република Северна Македонија"
                    className="link-light"
                    target="_blank"
                    href="https://mon.gov.mk/mk-MK/dokumenti/lista-na-aktivni-registri"
                    rel="nofollow"
                  >
                    Регистарот на високообразовни установи
                  </a>{" "}
                  на Министерство за образование и наука на Република Северна
                  Македонија, со{" "}
                  <strong>прочистени и збогатени податоци</strong>.
                </p>
              </div>
              <div className="col-xl-4 col-xxl-5 col-xxxl-6">
                <div className="hstack justify-content-xl-end gap-3">
                  <button
                    className="btn btn-sm btn-outline-light"
                    data-bs-target="#zaIzrabotkata"
                    data-bs-toggle="offcanvas"
                    role="button"
                    aria-controls="zaIzrabotkata"
                  >
                    За изработката
                  </button>
                  {socialLinks.length ? (
                    <ul className="nav justify-content-end">
                      {socialLinks.map((icon, key) => (
                        <li key={key} className="nav-item">
                          <a
                            title={`Сподели на ${icon.title}`}
                            href={icon.href}
                            target="_blank"
                            rel="noopener"
                            className="nav-link link-light"
                          >
                            <i className={`bi ${icon.icon}`}></i>
                            <span className="visually-hidden">{`Сподели на ${icon.title}`}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ``
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

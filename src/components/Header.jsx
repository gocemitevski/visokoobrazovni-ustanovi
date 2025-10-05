import { socialLinkButtons } from "../utils/socialLinkButtons";

export default function Header() {
  const socialLinks = socialLinkButtons();

  return (
    <div className="bg-primary text-light py-3">
      <header className="container-fluid">
        <div className="row">
          <div className="col-xxxl-10 offset-xxxl-1">
            <div className="row my-xxxl-4 g-3">
              <div className="col-xxxl-6">
                <h1 className="mb-3">
                  <a
                    href="./"
                    className="hstack link-light link-underline link-underline-opacity-50 gap-4 link-offset-1"
                  >
                    <i className="bi bi-mortarboard display-1"></i>
                    <span>{import.meta.env.VITE_APP_META_TITLE}</span>
                  </a>
                </h1>
                <p className="lead mb-4">
                  Интерактивна верзија на{" "}
                  <a
                    title="Отворете ја страницата „Листа на активни регистри“ на Министерство за образование и наука на Република Северна Македонија"
                    className="link-light"
                    target="_blank"
                    href="https://mon.gov.mk/mk-MK/dokumenti/lista-na-aktivni-registri"
                    rel="nofollow"
                  >
                    Регистар на високообразовни установи во Република Северна
                    Македонија
                  </a>{" "}
                  на Министерство за образование и наука на Република Северна
                  Македонија, со <strong>прочистени и збогатени податоци</strong>.
                </p>
              </div>
              <div className="col-xxxl-4 offset-xxxl-2 vstack">
                {socialLinks.length ? (
                  <ul className="nav justify-content-end flex-fill">
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
      </header>
    </div>
  );
}

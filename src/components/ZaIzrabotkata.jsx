import photo from "/registar-visokoobrazovni-ustanovi-r-s-makedonija-1200x675.png";
import { Offcanvas } from "bootstrap"; // Import is required for the Offcanvas component to work!

export default function ZaIzrabotkata() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="zaIzrabotkata"
      aria-labelledby="zaIzrabotkata"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="zaIzrabotkata">
          За изработката
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="visually-hidden">Затвори</span>
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="row g-0">
          <div className="col-lg-10">
            <figure>
              <a href={photo}>
                <img className="img-fluid" src={photo} />
              </a>
              <figcaption className="text-muted py-2 px-3">
                Промотивна слика за медиумска реупотреба
              </figcaption>
            </figure>
          </div>
        </div>
        <p>
          Интерактивната верзија на Регистарот на високообразовни установи е
          само еден од проектите на{" "}
          <a target="_blank" href="https://gocemitevski.com/">
            Гоце Митевски
          </a>{" "}
          за подигнување на стандардните за управување со отворени податоци во
          Република Северна Македонија. Државата објавува голем број на податоци
          и еден куп регистри, но квалитетот на податоците најчесто е многу
          низок и тие едноставно{" "}
          <strong className="fw-bold">
            не се подготвени за машинска обработка
          </strong>
          . Податоците се изработени со комерцијални алатки, за коишто се
          потребни скапи лиценци за користење, а тоа дополнително ја отежнува
          нивната реупотреба.
        </p>
        <p>
          Целта е да се даде{" "}
          <strong className="fw-bold">позитивен пример</strong> и со еден,
          проактивен пристап, да се мотивираат државните институции да се
          променат на подобро.
        </p>
        <p>
          Најмалку што може да добиете од оваа интерактивна презентација се
          одговори на следните прашања:
        </p>
        <ul>
          <li>
            <strong className="fw-bold">
              Колку државни универзитети има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Колку приватни универзитети има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Колку државни факултети има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Колку приватни факултети има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Колку верски високообразовни установи има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Колку видови на високообразовни установи има во Р. С. Македонија?
            </strong>
          </li>
          <li>
            <strong className="fw-bold">
              Кои се мрежните места на сите високообразовни установи во Р. С.
              Македонија?
            </strong>
          </li>
        </ul>
        <p>
          <a href="https://github.com/gocemitevski/visokoobrazovni-ustanovi">
            Изворниот код
          </a>{" "}
          е достапен на GitHub под лиценцата „
          <a href="https://github.com/gocemitevski/visokoobrazovni-ustanovi?tab=GPL-3.0-1-ov-file">
            GPL-3.0
          </a>
          “.
        </p>
        <p>Слични вакви проекти, Гоце Митевски има претходно изработено за:</p>
        <ul>
          <li>
            <a
              href="https://gocemitevski.github.io/osnovni-ucilista-mk/"
              target="_blank"
            >
              Основните училишта во Р. С. Македонија
            </a>
            <i className="bi bi-box-arrow-up-right fs-xs opacity-50 ms-2"></i>
          </li>
          <li>
            <a
              href="https://gocemitevski.github.io/sredni-ucilista-mk/"
              target="_blank"
            >
              Средните училишта во Р. С. Македонија
            </a>
            <i className="bi bi-box-arrow-up-right fs-xs opacity-50 ms-2"></i>
          </li>
          <li>
            <a
              href="https://gocemitevski.github.io/registar-licenci-ugostitelska-dejnost/"
              target="_blank"
            >
              Регистарот на издадени лиценци за вршење на угостителска дејност
              КАБАРЕ, НОЌЕН БАР, ДИСКОКЛУБ И ДИСКОКЛУБ НА ОТВОРЕН ПРОСТОР
            </a>
            <i className="bi bi-box-arrow-up-right fs-xs opacity-50 ms-2"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

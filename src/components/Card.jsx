import { count } from "../utils/counter";

export default function Card({ data, filters, index, title, titlePlural }) {
  return (
    <div
      className={`card ${
        filters[Object.keys(filters)[index]] || filters[Object.keys(filters)[7]]
          ? `border-success border-2`
          : ``
      } bg-light`}
    >
      <div className="card-body">
        <h2
          className={`card-title fs-4 ${
            filters[Object.keys(filters)[index]] ||
            filters[Object.keys(filters)[7]]
              ? `text-success`
              : ``
          }`}
        >
          {count(data, filters, index)}
        </h2>
        <p className="card-text">
          {count(data, filters, index) % 10 === 1 && count(data, filters, 1)
            ? title
            : titlePlural}
        </p>
      </div>
    </div>
  );
}

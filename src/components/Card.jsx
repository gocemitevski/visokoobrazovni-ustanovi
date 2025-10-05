import { count } from "../utils/counter";

export default function Card({ data, filters, index, title, titlePlural }) {
  return (
    <div className={`card text-bg-light`}>
      <div className="card-body">
        <h5
          className={`card-title ${
            filters[Object.keys(filters)[index]] ? `text-success` : ``
          }`}
        >
          {count(data, filters, index)}
        </h5>
        <p className="card-text">
          {count(data, filters, index) % 10 === 1 && count(data, filters, 1)
            ? title
            : titlePlural}
        </p>
      </div>
    </div>
  );
}

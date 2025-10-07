import { Fragment } from "react";

export default function TablePlaceholder() {
  return (
    <Fragment>
      <div className="placeholder-glow mt-3">
        <span className="placeholder col-12" style={{ height: 60 }}></span>
      </div>
      <div className="placeholder-glow mt-3">
        <span className="placeholder col-12" style={{ height: 200 }}></span>
      </div>
      {[...Array(8)].map((_, index) => (
        <p key={index} className="placeholder-glow my-2">
          <span className="placeholder h-50 col-12"></span>
        </p>
      ))}
    </Fragment>
  );
}

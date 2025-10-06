import { Fragment, useEffect, useMemo, useState } from "react";
import Card from "./Card";

export default function Table({ tableData }) {
  const placeholder = "Изберете...";
  const [filters, setFilters] = useState({
    "Реден број": "",
    "Назив на високообразовната установа": "",
    "Назив на универзитетска единица": "",
    Седиште: "",
    "Статус на високообразовната установа": "",
    "Вид на високообразовната установа": "",
    "Мрежно место": "",
    Пребарување: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const searchData = (e, column) => {
    setFilters({ ...filters, [column]: e.target.value });
  };

  const results = useMemo(() => {
    if (filters[Object.keys(filters)[7]]) {
      return filteredData.filter((item) => {
        return Object.values(item)
          .toString()
          .toLowerCase()
          .includes(filters[Object.keys(filters)[7]].trim().toLowerCase());
      });
    } else {
      return filteredData.filter((row) =>
        Object.keys(filters).every((column) => {
          if (!filters[column]) return true; // If filter is empty, include the row
          return (
            row[column] &&
            row[column]
              .toString()
              .trim()
              .toLowerCase()
              .includes(filters[column].trim().toLowerCase())
          );
        })
      );
    }
  }, [filteredData, filters]);

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  return (
    <Fragment>
      {tableData.length ? (
        <div className="table-responsive-md">
          <table className="table table-striped">
            <thead className="sticky-top">
              <tr>
                <td colSpan={8} className="pb-1 border-0" scope="col">
                  <form>
                    <div className="input-group flex-fill">
                      <span class="input-group-text">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        id={`search`}
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Пребарајте..."
                        onChange={(e) => searchData(e, Object.keys(filters)[7])}
                        value={filters[Object.keys(filters)[7]]}
                      ></input>
                      {filters[Object.keys(filters)[7]] && (
                        <button
                          className="btn btn-outline-secondary"
                          type="reset"
                          title={
                            filters[Object.keys(filters)[7]]
                              ? `Избришете`
                              : `Внесете вредност за да можете да ја избришете`
                          }
                          onClick={() =>
                            setFilters({
                              ...filters,
                              [Object.keys(filters)[7]]: "",
                            })
                          }
                          disabled={!filters[Object.keys(filters)[7]]}
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      )}
                    </div>
                    <div class="form-text mx-3 pt-2">
                      Пребарајте низ сите високообразовни установи во регистарот
                      со едноставни поими како:{" "}
                      <em>
                        информатика, Скопје, архитектура, јавна, приватна,
                        институт
                      </em>{" "}
                      и сл.
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <td className="col-xl-2 pb-1 border-0" scope="col">
                  <Card
                    data={results}
                    filters={filters}
                    index={`1`}
                    title={`Високообразовна установа`}
                    titlePlural={`Високообразовни установи`}
                  />
                </td>
                <td className="col-xl-2 pb-1 border-0" scope="col">
                  <Card
                    data={results}
                    filters={filters}
                    index={`2`}
                    title={`Универзитетска единица`}
                    titlePlural={`Универзитетски единици`}
                  />
                </td>
                <td className="col-xl-2 pb-1 border-0" scope="col">
                  <Card
                    data={results}
                    filters={filters}
                    index={`3`}
                    title={`Град`}
                    titlePlural={`Градови`}
                  />
                </td>
                <td className="col-xl-2 pb-1 border-0" scope="col">
                  <Card
                    data={results}
                    filters={filters}
                    index={`4`}
                    title={`Тип`}
                    titlePlural={`Типови`}
                  />
                </td>
                <td className="col-xl-2 pb-1 border-0" scope="col">
                  <Card
                    data={results}
                    filters={filters}
                    index={`5`}
                    title={`Вид`}
                    titlePlural={`Видови`}
                  />
                </td>
              </tr>
              <tr>
                {Object.keys(filters).map(
                  (filter, key) =>
                    key > 0 &&
                    key < 6 && (
                      <th className="col-xl-2" scope="col" key={key}>
                        <label htmlFor={filter} className="form-label">
                          {filter}
                        </label>
                        <div className="input-group mb-2">
                          <select
                            className={`form-select ${
                              filters[filter].length > 0 ? `is-valid` : ``
                            }`}
                            placeholder={placeholder}
                            id={filter}
                            disabled={filters[Object.keys(filters)[7]]}
                            onChange={(e) => searchData(e, filter)}
                            value={filters[filter]}
                          >
                            <option value={""}>{placeholder}</option>
                            {Object.values(tableData)
                              .map((item) => item[Object.keys(filters)[key]])
                              .filter(
                                (value, index, array) =>
                                  array.indexOf(value) === index
                              )
                              .map(
                                (el, i) =>
                                  el && (
                                    <option key={i} value={el}>
                                      {el}
                                    </option>
                                  )
                              )}
                          </select>
                          {filters[filter] && (
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              title={
                                filters[filter].length
                                  ? `Отстрани филтер`
                                  : `Изберете вредност за да можете да ја избришете`
                              }
                              onClick={() =>
                                setFilters({
                                  ...filters,
                                  [filter]: "",
                                })
                              }
                            >
                              <i className="bi bi-x-lg"></i>
                            </button>
                          )}
                        </div>
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {results.length ? (
                results.map((row, i) => (
                  <tr key={i}>
                    {Object.keys(filters).map(
                      (filter, key) =>
                        key > 0 &&
                        key < 6 && (
                          <td key={key}>
                            <div className="hstack justify-content-between align-items-start gap-3 tw-balance">
                              {key === 2 && Object.values(row)[6] ? (
                                <a
                                  className="link-body-emphasis"
                                  target="_blank"
                                  rel="noopener"
                                  href={Object.values(row)[6]}
                                >
                                  {row[filter]}
                                  <i className="bi bi-box-arrow-up-right fs-xs opacity-50 ms-2"></i>
                                </a>
                              ) : (
                                <span>{row[filter]}</span>
                              )}
                              {!filter
                                .toString()
                                .trim()
                                .toLowerCase()
                                .includes(
                                  row[filter] &&
                                    row[filter].toString().trim().toLowerCase()
                                )
                                ? !filters[filter] &&
                                  row[filter] && (
                                    <button
                                      title={`Пребарај за ${row[filter]}`}
                                      onClick={() =>
                                        setFilters({
                                          ...filters,
                                          [filter]: row[filter].toString(),
                                        })
                                      }
                                      className="btn btn-outline-secondary"
                                    >
                                      <i className="bi bi-search"></i>
                                    </button>
                                  )
                                : ``}
                            </div>
                          </td>
                        )
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="table-danger">
                    <div className="hstack gap-3">
                      <i className="bi bi-exclamation-square"></i>
                      <p className="mb-0">
                        Не постојат високообразовни установи за внесените
                        параметри или пак, сте направиле некоја грешка при
                        пребарувањето.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <Fragment>
          {[...Array(8)].map((_, index) => (
            <p key={index} className="placeholder-glow my-2">
              <span className="placeholder col-12"></span>
            </p>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}

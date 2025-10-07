export default function NoTableResults() {
  return (
    <tr>
      <td colSpan={8} className="table-danger">
        <div className="hstack gap-3">
          <i className="bi bi-exclamation-square"></i>
          <p className="mb-0">
            Не постојат високообразовни установи за внесените параметри или пак,
            сте направиле некоја грешка при пребарувањето.
          </p>
        </div>
      </td>
    </tr>
  );
}

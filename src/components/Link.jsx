export default function Link({ href, value }) {
  return href ? (
    <a
      className="link-body-emphasis"
      target="_blank"
      rel="noopener"
      href={href}
    >
      <span>{value}</span>
      <i className="bi bi-box-arrow-up-right fs-xs opacity-50 ms-2"></i>
    </a>
  ) : (
    <span>{value}</span>
  );
}

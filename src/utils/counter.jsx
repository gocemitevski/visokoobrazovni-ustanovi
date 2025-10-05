export function count(data, filters, key) {
  return Object.values(data)
    .map((item) => item[Object.keys(filters)[key]])
    .filter((value, index, array) => array.indexOf(value) === index).length;
}

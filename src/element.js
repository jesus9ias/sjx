let counter = 1;

export default (tag, attrs, content) => {
  const subElements = {
    id: counter,
    tag,
    attrs,
    content
  };
  counter++;
  return subElements;
}
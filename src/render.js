import { setActiveEffect } from './effects';

const renderOne = (container) => (content) => {
  if (content.id) {
    const element = document.createElement(content.tag);
    const attrs = Object.keys(content.attrs);
    const ordinalAttrs = attrs.filter((attr) => attr.indexOf('s-') === -1);
    const specialAttrs = attrs.filter((attr) => attr.indexOf('s-') > -1);
    const dataId = `data-s-${content.id}`;
    element.setAttribute(dataId, '');
    ordinalAttrs.forEach((attr) => {
      element.setAttribute(attr, content.attrs[attr]);
    });
    specialAttrs.forEach((attr) => {
      if (attr === 's-click') {
        element.addEventListener('click', content.attrs[attr]);
      }
      if (attr === 's-model') {
        element.value = content.attrs[attr]();
        element.addEventListener('input', (event) => {
          content.attrs[attr](event.target.value);
        });
      }
    });
    container.appendChild(element);
    render(`[${dataId}]`, content.content);
  } else if (['string', 'number', 'boolean'].indexOf(typeof content) > -1) {
    container.innerHTML = content;
  } else if (['function'].indexOf(typeof content) > -1) {
    const effect = () => {
      container.innerHTML = content();
    }
    setActiveEffect(effect);
  }
}

const render = (id, content) => {
  const container = document.querySelector(id);

  if (Array.isArray(content)) {
    content.forEach(renderOne(container));
  } else {
    renderOne(container)(content);
  }
};

export default render;

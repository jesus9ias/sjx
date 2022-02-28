import { el, render } from '../dist/sjx.es';

const app = el('div',
  { class: 'app' },
  [
    el('h1', {}, 'The App'),
    el('h2', {}, 'The sub title')
  ]
);

render('#app', [app]);
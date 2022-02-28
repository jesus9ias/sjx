import { el, render } from '../src/index';
import Toggle from './Toggle';
import Add from './Add';
import Sum from './Sum';

const app = el('div',
  { class: 'main' },
  [
    el('h1', {}, 'The App'),
    el('h2', {}, 'The sub title'),
    el('h3', {}, ['s', 'y']),
    Toggle,
    Add,
    Sum
  ]
);

render('#app', [app]);

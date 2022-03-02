import { el, render } from '../src/index';
import Toggle from './Toggle';
import Add from './Add';
import Sum from './Sum';
import User from './User';
import Message from './Message';

const app = el('div',
  { class: 'main' },
  [
    el('h1', {}, 'The App'),
    el('h2', {}, 'The sub title'),
    el('h3', {}, ['s', 'y']),
    Toggle,
    Add,
    Sum,
    User,
    Message
  ]
);

render('#app', [app]);

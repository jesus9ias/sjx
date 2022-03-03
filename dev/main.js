import { el, render } from '../src/index';
import Toggle from './Toggle';
import Add from './Add';
import Sum from './Sum';
import Sum2 from './Sum2';
import User from './User';
import Message from './Message';
import FormatedList from './FormatedList';
import FormatedName from './FormatedName';

const app = el('div',
  { class: 'main' },
  [
    el('h1', {}, 'The App'),
    el('h2', {}, 'The sub title'),
    el('h3', {}, ['s', 'y']),
    Toggle,
    Add,
    Sum,
    Sum2,
    User,
    Message,
    FormatedList,
    FormatedName
  ]
);

render('#app', [app]);

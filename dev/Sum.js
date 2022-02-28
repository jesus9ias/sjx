import { el, ref } from '../src/index';

const val1 = ref(0);
const val2 = ref(0);

export default el('div',
  { class: 'sum' },
  [
    el('button', {
      's-click': () => {
        val1.value++;
      }
    }, '+1'),
    el('button', {
      's-click': () => {
        val2.value += 10;
      }
    }, '+10'),
    el('h3', {}, () => { return val1.value + val2.value; }),
    el('h4', {}, () => { return `* 10 = ${(val1.value + val2.value) * 10}`; })
  ]
);
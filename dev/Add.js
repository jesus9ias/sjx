import { el, ref } from '../src/index';

const count = ref(0);

export default el('div',
  { class: 'add' },
  [
    el('button', {
      's-click': () => {
        count.value++;
      }
    }, 'Add'),
    el('p', {}, () => { return count.value; })
  ]
);
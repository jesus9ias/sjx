import { el, ref } from '../src/index';

const isOpen = ref(true);

export default el('div',
  { class: 'toggle' },
  [
    el('button', {
      's-click': () => {
        isOpen.value = !isOpen.value;
      }
    }, 'Toggle'),
    el('p', {}, () => isOpen.value ? 'Open' : 'Closed')
  ]
);
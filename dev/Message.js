import { el, ref, reactive, watch } from '../src/index';

const count = ref(0);
const reachLimit = ref(false);

watch(count, 'value', () => {
  reachLimit.value = count.value >= 5;
});

export default el('div',
  { class: 'message' },
  [
    'Set count and get message when reach 5 ',
    el('button', {
      's-click': () => {
        count.value++;
      }
    }, () => `Count is ${count.value}`),
    el('p', {}, () => reachLimit.value ? 'Got count limit' : '')
  ]
);
import { el, ref, computed } from '../src/index';

const val1 = ref(0);
const val2 = ref(0);

const sum = computed(() => val1.value + val2.value);

export default el('div',
  { class: 'sum' },
  [
    el('button', {
      's-click': () => {
        val1.value++;
      }
    }, () => `+1 ${val1.value}`),
    el('button', {
      's-click': () => {
        val2.value++;
      }
    }, () => `+1 ${val2.value}`),
    el('h4', {}, () => { return `Sum = ${sum.value}`; })
  ]
);
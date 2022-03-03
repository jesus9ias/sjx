import { el, reactive, computed } from '../src/index';

const list = reactive([]);

const formatedList = computed(() => list.map((e) => `Elem ${e}`));

export default el('div',
  { class: 'sum' },
  [
    el('button', {
      's-click': () => {
        list.push(list.length);
      }
    }, () => 'Add'),
    el('h3', {}, () => { return `Elements: ${JSON.stringify(formatedList)}`; })
  ]
);
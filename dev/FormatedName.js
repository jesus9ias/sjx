import { el, reactive, computed } from '../src/index';

const data = reactive({
  name: 'Homer',
  lastName: 'Simpson'
});

const completeName = computed(() => ({
  name: `${data.name} J.`,
  lastName: data.lastName
}));

const formatedName = computed(() => `${completeName.value.name} ${completeName.value.lastName}`)

export default el('div',
  { class: 'sum' },
  [
    el('button', {
      's-click': () => {
        data.name = 'Bart';
      }
    }, () => 'Update'),
    el('h3', {}, () => { return `My name is: ${formatedName.value}`; })
  ]
);
import { el, reactive } from '../src/index';

const data = reactive({
  age: 1
});

export default el('div',
  {},
  [
    el('input', {
      type: 'number',
      's-model': (val = data.age) => data.age = val
    }, []),
    el('h3', {}, () => { return `My age is: ${data.age}`; })
  ]
);
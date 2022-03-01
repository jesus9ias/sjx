import { el, ref, reactive } from '../src/index';

const petCount = ref(0);

const user = reactive({
  name: 'Jhon',
  age: 20,
  status: 'single',
  pets: reactive([])
});

export default el('div',
  { class: 'user' },
  [
    el('button', {
      's-click': () => {
        user.age++;
      }
    }, 'Age +1'),
    el('div', { class: 'user__status' }, [
      el('button', {
        's-click': () => {
          user.status = 'single';
        }
      }, 'Single'),
      el('button', {
        's-click': () => {
          user.status = 'married';
        }
      }, 'Married')
    ]),
    el('button', {
      's-click': () => {
        petCount.value++;
        user.pets.push(`Pet ${petCount.value}`)
      }
    }, 'Add pet'),
    el('p', {}, () => `${user.name} has ${user.age} years old and is ${user.status}`),
    el('p', {}, () => `His has ${petCount.value} being ${JSON.stringify(user.pets)} and the last is ${user.pets[petCount.value - 1]}`)
  ]
);
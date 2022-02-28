import { track, trigger } from './effects';

export default (value) => {
  const refObject = {
    get value() {
      track(refObject, 'value');
      return value;
    },
    set value(newValue) {
      value = newValue;
      trigger(refObject, 'value');
    }
  };
  return refObject;
};

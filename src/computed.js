import { track } from './effects';

export default (effect) => {
  const refObject = {
    get value() {
      track(refObject, 'value');
      return effect();
    }
  };
  return refObject;
};

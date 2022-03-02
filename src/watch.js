import { setEffectForWatch } from './effects';

export default (obj, prop, effect, immediate = false) => {
  setEffectForWatch(obj, prop, effect, immediate);
}

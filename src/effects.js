
const effectsByTargets = new WeakMap();

let activeEffect = null;

function getEffectsForProperty(target, key) {
  if (!effectsByTargets.has(target)) {
    effectsByTargets.set(target, new Map());
  }
  const mappedTarget = effectsByTargets.get(target);
  if (!mappedTarget.has(key)) {
    mappedTarget.set(key, new Set());
  }
  return mappedTarget.get(key);
}

export const track = (target, key) => {
  if (activeEffect) {
    const effects = getEffectsForProperty(target, key);
    effects.add(activeEffect);
  }
}

export const trigger = (target, key) => {
  const effects = getEffectsForProperty(target, key);
  effects.forEach((effect) => {
    effect();
  });
}

export const setActiveEffect = (newEffect) => {
  const effect = () => {
    activeEffect = effect;
    newEffect();
    activeEffect = null;
  }
  effect();
}

export const setEffectForWatch = (target, key, newEffect, immediate) => {
  const effect = () => {
    activeEffect = effect;
    newEffect();
    activeEffect = null;
  }
  if (immediate) {
    newEffect();
  }

  const effects = getEffectsForProperty(target, key);
  effects.add(effect);
}
import { StateUpdater, useState as _preactUseState } from 'preact/compat';

/**
 * workaround for weird preact type definitions that allow undefined
 */
export const useState = <T> (initialValue: T): [T, StateUpdater<T>] => {
  return _preactUseState(initialValue);
}
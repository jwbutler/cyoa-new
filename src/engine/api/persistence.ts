import type { Player, Location, Message } from './GameApi';

export type SaveState = Readonly<{
  turn: number,
  location: Location,
  messages: Message[],
  player: Player,
  booleans: Record<string, boolean>
}>;

const _serialize = (state: SaveState): string => btoa(JSON.stringify(state));
const _deserialize = (serialized: string): SaveState => JSON.parse(atob(serialized));

const KEY = 'savegame';

export const saveGame = (state: SaveState) => {
  const serialized = _serialize(state);
  window.localStorage.setItem(KEY, serialized);
};

export const loadGame = (): SaveState => {
  const serialized = window.localStorage.getItem(KEY);
  return _deserialize(serialized);
};

export const saveGameExists = (): boolean => {
  return window.localStorage.getItem(KEY) != null;
};

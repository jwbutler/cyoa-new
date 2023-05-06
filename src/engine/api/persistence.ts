import type { Player, Location, Message } from './GameApi';

export type GameState = Readonly<{
  location: Location,
  messages: Message[],
  player: Player,
  booleans: Record<string, boolean>
}>;

const _serialize = (state: GameState): string => btoa(JSON.stringify(state));
const _deserialize = (serialized: string): GameState => JSON.parse(atob(serialized));

const KEY = 'savegame';

export const saveGame = (state: GameState) => {
  const serialized = _serialize(state);
  window.localStorage.setItem(KEY, serialized);
};

export const loadGame = (): GameState => {
  const serialized = window.localStorage.getItem(KEY);
  return _deserialize(serialized);
};

export const saveGameExists = (): boolean => {
  return window.localStorage.getItem(KEY) != null;
};

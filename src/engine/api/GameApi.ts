export type Player = Readonly<{
  inventory: string[],
  spells: string[],
  quests: string[],
  gold: number
}>;

export enum Direction {
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west'
}

export type Location = Readonly<{
  scene: string,
  direction: Direction | null
}>;

export type Message = Readonly<{
  message: string,
  turn: number
}>;

export type GameApi = Readonly<{
  turn: number,
  location: Location,
  moveTo: (location: Location) => void,
  player: Player,
  addGold: (amount: number) => void,
  getActiveMessages: () => string[],
  addMessage: (message: string) => void,
  buyItem: (itemName: string, cost: number) => void,
  buySpell: (spellName: string, cost: number) => void,
  acceptQuest: (questName: string) => void,
  completeQuest: (questName: string) => void,
  gameOver: () => void,
  getBoolean: (name: string) => boolean | undefined,
  setBoolean: (name: string, value: boolean) => void,
  booleanFlags: Record<string, boolean>,
  saveGame: () => void,
  loadGame: () => void,
  saveGameExists: () => boolean
}>;

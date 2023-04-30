export type Player = Readonly<{
  inventory: string[],
  spells: string[],
  quests: string[],
  gold: number
}>;

export type GameApi = {
  scene: string,
  moveTo: (scene: string) => void,
  player: Player,
  addGold: (amount: number) => void,
  message: string | null,
  setMessage: (message: string | null) => void,
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
};
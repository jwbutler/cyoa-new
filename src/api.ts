import { useState } from 'react';
import { checkArgument } from './preconditions';

export type Player = {
  inventory: string[],
  quests: string[],
  gold: number
};

export type GameApi = {
  player: Player,
  buyItem: (itemName: string, cost: number) => void,
  acceptQuest: (questName: string) => void,
  alert: (message: string) => void
};

export const useApi = (): GameApi => {
  const initialPlayer: Player = {
    inventory: [],
    quests: [],
    gold: 500
  };

  const [player, setPlayer] = useState<Player>(initialPlayer);

  const buyItem = (itemName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      inventory: [...player.inventory, itemName]
    });
  };

  const acceptQuest = (questName: string) => {
    setPlayer({
      ...player,
      quests: [...player.quests, questName]
    });
  };

  const alert = (message: string) => {
    window.alert(message);
  };

  return {
    player,
    buyItem,
    acceptQuest,
    alert
  };
};
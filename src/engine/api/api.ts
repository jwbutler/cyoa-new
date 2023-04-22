import { useState } from 'react';
import { checkArgument } from '../../preconditions';

export type Player = Readonly<{
  inventory: string[],
  spells: string[],
  quests: string[],
  gold: number
}>;

export type GameApi = {
  scene: string,
  setScene: (scene: string) => void,
  player: Player,
  buyItem: (itemName: string, cost: number) => void,
  buySpell: (spellName: string, cost: number) => void,
  acceptQuest: (questName: string) => void,
  alert: (message: string) => void
};

type Props = Readonly<{
  player: {
    inventory: string[],
    spells: string[],
    quests: string[],
    gold: number,
  },
  scene: string
}>;

export const useApi = (props: Props): GameApi => {
  const initialPlayer: Player = { ...props.player };

  const [player, setPlayer] = useState<Player>(initialPlayer);
  const [scene, setScene] = useState<string>(props.scene);

  const buyItem = (itemName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      inventory: [...player.inventory, itemName]
    });
  };

  const buySpell = (spellName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      spells: [...player.spells, spellName]
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
    scene,
    setScene,
    player,
    buyItem,
    buySpell,
    acceptQuest,
    alert
  };
};
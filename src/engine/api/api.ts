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
  message: string | null,
  setMessage: (message: string | null) => void,
  buyItem: (itemName: string, cost: number) => void,
  buySpell: (spellName: string, cost: number) => void,
  acceptQuest: (questName: string) => void
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
  const [message, setMessage] = useState<string | null>(null);

  const buyItem = (itemName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      inventory: [...player.inventory, itemName]
    });
    setMessage(`Bought a ${itemName}`);
  };

  const buySpell = (spellName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      spells: [...player.spells, spellName]
    });
    setMessage(`Bought a ${spellName}`);
  };

  const acceptQuest = (questName: string) => {
    setPlayer({
      ...player,
      quests: [...player.quests, questName]
    });
    console.log('wtf');
    setMessage(`Accepted quest: ${questName}`);
  };

  return {
    scene,
    setScene: (sceneName: string | null) => {
      setScene(sceneName);
      setMessage(null);
    },
    player,
    message,
    setMessage,
    buyItem,
    buySpell,
    acceptQuest
  };
};
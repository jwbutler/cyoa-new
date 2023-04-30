import { checkArgument } from '../../preconditions';
import { useState } from 'preact/compat';
import { GameApi, Player } from './GameApi';

type Props = Readonly<{
  player: {
    inventory: string[],
    spells: string[],
    quests: string[],
    gold: number,
  },
  variables?: {
    booleans?: Record<string, boolean>
  },
  scene: string
}>;

export const useApi = (props: Props): GameApi => {
  const [scene, setScene] = useState<string>(props.scene);
  const [message, setMessage] = useState<string | null>(null);

  const [_player, setPlayer] = useState<Player>(props.player);
  const player = _player!;

  const addGold = (amount: number) => {
    setPlayer(player => ({
      ...player,
      gold: player.gold + amount
    }));
  };

  const buyItem = (itemName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer(player => ({
      ...player,
      gold: player.gold - cost,
      inventory: [...player.inventory, itemName]
    }));
    setMessage(`Bought a ${itemName}`);
  };

  const buySpell = (spellName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player!,
      gold: player.gold - cost,
      spells: [...player.spells, spellName]
    });
    setMessage(`Bought a ${spellName}`);
  };

  const acceptQuest = (questName: string) => {
    setPlayer({
      ...player!,
      quests: [...player.quests, questName]
    });
    console.log('wtf');
    setMessage(`Accepted quest: ${questName}`);
  };

  const moveTo = (sceneName: string) => {
    setScene(sceneName);
    setMessage(null);
  };

  const handleGameOver = () => {
    alert('Game over!');
    setPlayer(props.player);
    setScene(props.scene);
    setMessage(null);
  };

  const [booleans, setBooleans] = useState<Record<string, boolean>>(props.variables?.booleans ?? {});

  const getBoolean = (name: string): boolean | undefined => booleans[name];
  const setBoolean = (name: string, value: boolean) => {
    setBooleans(booleans => ({
      ...booleans,
      [name]: value
    }));
  };

  return {
    scene,
    moveTo,
    player: player!,
    addGold,
    message,
    setMessage,
    buyItem,
    buySpell,
    acceptQuest,
    gameOver: handleGameOver,
    getBoolean,
    setBoolean
  };
};

import { checkArgument } from '../../preconditions';
import { useState } from 'preact/compat';
import { GameApi, Player } from './GameApi';
import { saveGame, loadGame, saveGameExists } from './persistence';

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
    setMessage(`Accepted quest: ${questName}`);
  };

  const completeQuest = (questName: string) => {
    setPlayer({
      ...player,
      quests: player.quests.filter(q => q !== questName)
    });
    setMessage(`Completed quest: ${questName}`);
  };

  const moveTo = (sceneName: string) => {
    setScene(sceneName);
    setMessage(null);
  };

  const gameOver = () => {
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

  const handleSaveGame = () => {
    const state = { scene, message, player, booleans };
    saveGame(state);
    setMessage('Game Saved.');
  };

  const handleLoadGame = () => {
    const { scene, message, player, booleans } = loadGame();
    setScene(scene);
    setMessage('Game Loaded.'); // overwrites message, oh well
    setPlayer(player)
    setBooleans(booleans);
  };

  return {
    scene,
    moveTo,
    player,
    addGold,
    message,
    setMessage,
    buyItem,
    buySpell,
    acceptQuest,
    completeQuest,
    gameOver,
    getBoolean,
    setBoolean,
    booleanFlags: booleans,
    saveGame: handleSaveGame,
    loadGame: handleLoadGame,
    saveGameExists
  };
};

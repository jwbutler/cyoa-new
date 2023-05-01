import { checkArgument } from '../../preconditions';
import { useState } from 'preact/compat';
import { Direction, GameApi, Location, Player } from './GameApi';
import { saveGame, loadGame, saveGameExists, GameState } from './persistence';

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
  location: Location
}>;

export const useApi = (props: Props): GameApi => {
  const [_location, setLocation] = useState(props.location);
  const location = _location!;
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

  const moveTo = (location: Location) => {
    console.log('in moveTo');
    setLocation(location);
    setMessage(null);
  };

  const gameOver = () => {
    alert('Game over!');
    setPlayer(props.player);
    setLocation(props.location);
    setMessage(null);
  };

  const [_booleans, setBooleans] = useState<Record<string, boolean>>(props.variables?.booleans ?? {});
  const booleans = _booleans!;

  const getBoolean = (name: string): boolean | undefined => booleans[name];
  const setBoolean = (name: string, value: boolean) => {
    setBooleans(booleans => ({
      ...booleans,
      [name]: value
    }));
  };

  const handleSaveGame = () => {
    const state: GameState = { location, message, player, booleans };
    saveGame(state);
    setMessage('Game Saved.');
  };

  const handleLoadGame = () => {
    const { location, message, player, booleans } = loadGame();
    setLocation(location);
    setMessage('Game Loaded.'); // overwrites message, oh well
    setPlayer(player);
    setBooleans(booleans);
  };

  return {
    location,
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

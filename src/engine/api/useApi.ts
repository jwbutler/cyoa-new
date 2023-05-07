import { checkArgument } from '../../utils/preconditions';
import { useState } from '../../utils/preact';
import type { GameApi, Location, Message, Player } from './GameApi';
import { saveGame, loadGame, saveGameExists, SaveState } from './persistence';

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
  const [location, setLocation] = useState<Location>(props.location);
  const [messages, setMessages] = useState<Message[]>([]);
  const [player, setPlayer] = useState<Player>(props.player);
  const [turn, setTurn] = useState<number>(1);
  const [booleans, setBooleans] = useState<Record<string, boolean>>(props.variables?.booleans ?? {});

  const addMessage = (message: string) => {
    setMessages(messages => [
      ...messages,
      { message, turn }
    ]);
  };
  const clearMessages = () => setMessages([]);
  const getActiveMessages = (): string[] => {
    return messages
      .filter(message => message.turn === turn)
      .map(({ message }) => message);
  };

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
    addMessage(`Bought a ${itemName}`);
  };

  const buySpell = (spellName: string, cost: number) => {
    checkArgument(cost <= player.gold);
    setPlayer({
      ...player,
      gold: player.gold - cost,
      spells: [...player.spells, spellName]
    });
    addMessage(`Bought a ${spellName}`);
  };

  const acceptQuest = (questName: string) => {
    setPlayer({
      ...player,
      quests: [...player.quests, questName]
    });
    addMessage(`Accepted quest: ${questName}`);
  };

  const completeQuest = (questName: string) => {
    setPlayer({
      ...player,
      quests: player.quests.filter(q => q !== questName)
    });
    addMessage(`Completed quest: ${questName}`);
  };

  const moveTo = (location: Location) => {
    setLocation(location);
    setTurn(turn => turn + 1);
  };

  const reset = () => {
    setPlayer(props.player);
    setLocation(props.location);
    clearMessages();
    setTurn(1);
    setBooleans(props.variables?.booleans ?? {});
  };

  const getBoolean = (name: string): boolean | undefined => booleans[name];
  const setBoolean = (name: string, value: boolean) => {
    setBooleans(booleans => ({
      ...booleans,
      [name]: value
    }));
  };

  const gameOver = () => {
    alert('Game over!');
    reset();
  };

  const handleSaveGame = () => {
    const state: SaveState = { turn, location, messages, player, booleans };
    saveGame(state);
    addMessage('Game Saved.');
  };

  const handleLoadGame = () => {
    const { turn, location, messages, player, booleans } = loadGame();
    setTurn(turn);
    setLocation(location);
    setPlayer(player);
    setBooleans(booleans);
    addMessage('Game Loaded.');
  };

  return {
    turn,
    location,
    moveTo,
    player,
    addGold,
    getActiveMessages,
    addMessage,
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

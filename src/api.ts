import { useState } from 'react';

export type GameState = {
  inventory: string[],
  gold: number
};

export type GameAPI = {
  state: GameState,
  buyItem: (itemName: string, cost: number) => void
};

export const useApi = (): GameAPI => {
  const initialState: GameState = {
    inventory: [],
    gold: 500
  };

  const [state, setState] = useState<GameState>(initialState);

  const buyItem = (itemName: string, cost: number) => {
    console.log(`buying ${itemName}`);
    setState(prevState => {
      const newState = { ...prevState };
      newState.gold -= cost;
      newState.inventory = [...prevState.inventory, itemName];
      return newState;
    });
  };

  return {
    state,
    buyItem
  };
};
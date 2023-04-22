import * as React from 'react';
import { ContainerType } from './Engine';

export const Container: ContainerType = ({ api, children }) => {
  const { player } = api;
  return (
    <div>
      {children}
      <hr />
      <pre>
        <div>Gold: {player.gold}</div>
        <div>Items: {JSON.stringify(player.inventory)}</div>
        <div>Quests: {JSON.stringify(player.quests)}</div>
      </pre>
    </div>
  );
};
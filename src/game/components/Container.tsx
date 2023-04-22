import * as React from 'react';
import type { ContainerComponent } from '../../engine/components/Engine';
import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'react';

export const Container: ContainerComponent = ({ children }) => {
  const api = useContext(ApiContext);
  const { player } = api;
  return (
    <div>
      {children}
      <hr />
      <pre>
        <div>Gold: {player.gold}</div>
        <div>Items: {JSON.stringify(player.inventory)}</div>
        <div>Spells: {JSON.stringify(player.spells)}</div>
        <div>Quests: {JSON.stringify(player.quests)}</div>
      </pre>
    </div>
  );
};
import { Links } from './Links';
import { Link } from './Link';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';

export const Footer = () => {
  const api = useContext(ApiContext);
  const { player } = api;
  return (
    <>
      <pre>
        <div>Turn: {api.turn}</div>
        <div>Gold: {player.gold}</div>
        {/*
          <div>Items: {JSON.stringify(player.inventory)}</div>
          <div>Spells: {JSON.stringify(player.spells)}</div>
          <div>Quests: {JSON.stringify(player.quests)}</div>
          <div>Boolean Flags: {JSON.stringify(api.booleanFlags, null, 2)}</div>
        */}
      </pre>
      <Links>
        <Link onClick={() => api.saveGame()}>Save Game</Link>
        {api.saveGameExists() && (
          <Link onClick={() => api.loadGame()}>Load Game</Link>
        )}
      </Links>
    </>
  );
}
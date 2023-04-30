import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import type { ComponentChildren } from 'preact';
import { Link } from './Link';
import { Links } from './Links';

type Props = Readonly<{
  children: ComponentChildren
}>;

export const Container = ({ children }: Props) => {
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
        <div>Boolean Flags: {JSON.stringify(api.booleanFlags, null, 2)}</div>
      </pre>
      <Links>
        <Link onClick={() => api.saveGame()}>Save Game</Link>
        {api.saveGameExists() && (
          <Link onClick={() => api.loadGame()}>Load Game</Link>
        )}
      </Links>
    </div>
  );
};
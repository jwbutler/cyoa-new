import { GameApi } from '../api';
import { Scene } from '../components/Scene';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameApi
}>;

export const Dungeon = ({ api }: Props) => {
  return (
    <Scene title="Dungeon">
      <Link to="town">To Town</Link>
    </Scene>
  );
};
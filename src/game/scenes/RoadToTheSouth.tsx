import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';
import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';

type Props = Readonly<{}>;

export const RoadToTheSouth = ({}: Props) => {
  const api = useContext(ApiContext);

  return (
    <Scene title="Road to the South">
      <p>
        The Road to the South is impassible.
        Absolutely impossible to pass. Impassible.
      </p>
      <p>
        <Link onClick={() => api.gameOver()}>
          GAME OVER
        </Link>
      </p>
    </Scene>
  );
};
import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';
import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';

export const RoadToTheSouth = () => {
  const api = useContext(ApiContext);

  return (
    <Scene title="Road to the South">
      <p>
        The Road to the South is impassible.
        Absolutely impossible to pass. Impassible.
      </p>
      <Links>
        <Link onClick={() => api.gameOver()}>
          GAME OVER
        </Link>
      </Links>
    </Scene>
  );
};
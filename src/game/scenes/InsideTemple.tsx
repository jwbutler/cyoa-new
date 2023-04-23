import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const InsideTemple = () => {
  return (
    <Scene title="Temple">
      <p>
        <i>(first dungeon level, earth priest, etc.)</i>
      </p>
      <Links>
        <Link to="outside_temple">
          Exit
        </Link>
      </Links>
    </Scene>
  );
};
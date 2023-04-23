import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const OutsideTown = () => {
  return (
    <Scene title="Outside Town">
      <Links>
        <Link to="town">
          Enter Town
        </Link>
        <Link to="road_to_the_north">
          Take the Road to the North
        </Link>
        <Link to="road_to_the_south">
          Take the Road to the South
        </Link>
      </Links>
    </Scene>
  );
};
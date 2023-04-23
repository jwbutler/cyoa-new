import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const OutsideTemple = () => {
  return (
    <Scene title="Outside Temple">
      <p>
        You're standing outside a massive stone temple.
        This was a major Earth Cult temple for the last several centuries,
        but it's been abandoned since the Heaven Cult banished the Earth Cult 40 years ago.
      </p>
      <p>
        The temple is imposing, though slightly overgrown.
      </p>
      <Links>
        <Link to="inside_temple">
          Go inside
        </Link>
        <Link to="road_to_the_north">
          Exit
        </Link>
      </Links>
    </Scene>
  );
};
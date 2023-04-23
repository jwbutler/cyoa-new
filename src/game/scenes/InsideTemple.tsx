import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const InsideTemple = () => (
  <Scene title="Inside the Temple">
    <Links>
      <Link to="temple_catacombs">
        Enter the Catacombs
      </Link>
      <Link to="outside_temple">
        Exit
      </Link>
    </Links>
  </Scene>
);
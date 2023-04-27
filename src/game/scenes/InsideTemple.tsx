import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';

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
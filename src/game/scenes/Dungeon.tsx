import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';

export const Dungeon = () => (
  <Scene title="Dungeon">
    <p>
      <i>(Nothing to do here.  Maybe there will be a real grid here, maybe not...)</i>
    </p>
    <Links>
      <Link to="town">To Town</Link>
    </Links>
  </Scene>
);
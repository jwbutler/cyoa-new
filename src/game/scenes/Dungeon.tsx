import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

type Props = Readonly<{}>;

export const Dungeon = ({}: Props) => {
  return (
    <Scene title="Dungeon">
      <p>
        <i>(Nothing to do here.  Maybe there will be a real grid here, maybe not...)</i>
      </p>
      <Links>
        <Link to="town">To Town</Link>
      </Links>
    </Scene>
  );
};
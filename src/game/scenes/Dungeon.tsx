import { Scene } from '../../engine/components/Scene';
import { Link } from '../../engine/components/Link';

type Props = Readonly<{}>;

export const Dungeon = ({}: Props) => {
  return (
    <Scene title="Dungeon">
      <p>
        <i>(Nothing to do here.  Maybe there will be a real grid here, maybe not...)</i>
      </p>
      <ul>
        <li>
          <Link to="town">To Town</Link>
        </li>
      </ul>
    </Scene>
  );
};
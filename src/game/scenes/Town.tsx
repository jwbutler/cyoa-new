import { Scene } from '../../engine/components/Scene';
import { Link } from '../../engine/components/Link';

type Props = Readonly<{}>;

export const Town = ({}: Props) => {
  return (
    <Scene title="Town">
      <p>You're in the middle of a small town with dirt roads.</p>
      <p>There are a few shops here, as well as a tavern.</p>

      <ul>
        <li>
          <Link to="blacksmith">
            Go to the Blacksmith Shop
          </Link>
        </li>
        <li>
          <Link to="spell_shop">
            Go to the Spell Shop
          </Link>
        </li>
        <li>
          <Link to="tavern">
            Go to the Tavern
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="dungeon">
            Enter the Dungeon!
          </Link>
        </li>
      </ul>
    </Scene>
  );
};
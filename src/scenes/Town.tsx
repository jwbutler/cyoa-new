import { Scene } from '../components/Scene';
import { Link } from '../components/Link';
import { GameAPI } from '../api';

type Props = Readonly<{
  api: GameAPI
}>;

export const Town = (props: Props) => {
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
    </Scene>
  );
};
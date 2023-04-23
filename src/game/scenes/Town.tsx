import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const Town = () => (
  <Scene title="Town">
    <p>You're in the middle of a small town with dirt roads.</p>
    <p>There are a few shops here, as well as a tavern.</p>

    <Links>
      <Link to="blacksmith">
        Go to the Blacksmith
      </Link>
      <Link to="spell_shop">
        Go to the Spell Shop
      </Link>
      <Link to="tavern">
        Go to the Tavern
      </Link>
      <Link to="outside_town">
        Exit Town
      </Link>
    </Links>
  </Scene>
);
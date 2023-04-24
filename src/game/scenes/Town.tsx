import { Image } from '../components/Image';
import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

import town_png from '../images/town.png';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../engine/api/ApiContext';

export const Town = () => {
  const api = useContext(ApiContext);
  if (api.player.quests.includes('earth_priest')) {
    api.setMessage('Done with part 1');
  }
  return (
    <Scene title="Town">
      <Image src={town_png} />
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
};
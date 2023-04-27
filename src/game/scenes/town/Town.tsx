import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';

import town_png from '../../images/town.png';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';
import { Column, Columns } from '../../../ui/components/Columns';
import { QuestName, SceneName } from '../../types';

export const Town = () => {
  const api = useContext(ApiContext);
  if (api.player.quests.includes(QuestName.EARTH_PRIEST)) {
    api.setMessage('Done with part 1');
  }
  return (
    <Scene title="Town">
      <Columns>
        <Column>
          <Image src={town_png} />
        </Column>
        <Column>
          <p>You're in the middle of a small town with dirt roads.</p>
          <p>There are a few shops here, as well as a tavern.</p>

          <Links>
            <Link to={SceneName.BLACKSMITH}>
              Go to the Blacksmith
            </Link>
            <Link to={SceneName.SPELL_SHOP}>
              Go to the Spell Shop
            </Link>
            <Link to={SceneName.TAVERN}>
              Go to the Tavern
            </Link>
            <Link to={SceneName.OUTSIDE_TOWN}>
              Exit Town
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};
import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';
import { Direction } from '../../../engine/api/GameApi';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { Scene } from '../../../ui/components/Scene';

import town_png from '../../images/town.png';
import { SceneName } from '../../types';

export const Town = () => (
  <Scene title="Town">
    <Columns>
      <Column>
        <Image src={town_png} />
      </Column>
      <Column>
        <p>You're in the middle of a small town with dirt roads.</p>
        <p>There are a few shops here, as well as a tavern.</p>

        <Links>
          <Link to={SceneName.ARMORER}>
            Go to the Armorer
          </Link>
          <Link to={SceneName.SHOPKEEPER}>
            Go to the Shopkeeper
          </Link>
          <Link to={SceneName.TAVERN}>
            Go to the Tavern
          </Link>
          <Link to={SceneName.ROAD_TO_THE_NORTH} direction={Direction.NORTH}>
            Exit Town
          </Link>
        </Links>
      </Column>
    </Columns>
  </Scene>
);

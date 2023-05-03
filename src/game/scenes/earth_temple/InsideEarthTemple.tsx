import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';

export const InsideEarthTemple = () => (
  <Scene title="Inside the Temple">
    <Columns>
      <Column />
      <Column>
        <Links>
          <Link to={SceneName.EARTH_TEMPLE_CATACOMBS}>
            Enter the Catacombs
          </Link>
          <Link to={SceneName.OUTSIDE_EARTH_TEMPLE}>
            Exit
          </Link>
        </Links>
      </Column>
    </Columns>
  </Scene>
);
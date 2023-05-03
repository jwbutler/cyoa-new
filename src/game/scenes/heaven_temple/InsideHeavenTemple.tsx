import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';

export const InsideHeavenTemple = () => (
  <Scene title="Inside Heaven Temple">
    <Columns>
      <Column />
      <Column>
        <Links>
          <Link to={SceneName.ROAD_TO_THE_EAST}>
            Exit
          </Link>
        </Links>
      </Column>
    </Columns>
  </Scene>
);
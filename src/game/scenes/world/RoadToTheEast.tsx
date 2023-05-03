import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { Columns } from '../../../ui/components/Columns';
import { Column } from '../../../ui/components/Column';
import { SceneName } from '../../types';
import road_to_the_east_png from '../../images/road_to_the_east.png';
import { Direction } from '../../../engine/api/GameApi';

export const RoadToTheEast = () => (
  <Scene title="Road to the East">
    <Columns>
      <Column>
        <Image src={road_to_the_east_png} />
      </Column>
      <Column>
        <p>
          You're looking up at the glorious Temple of Heaven.
        </p>
        <Links>
          <Link to={SceneName.INSIDE_HEAVEN_TEMPLE}>
            Enter the temple
          </Link>
          <Link to={SceneName.ROAD_TO_THE_NORTH} direction={Direction.SOUTH}>
            Head back to town
          </Link>
        </Links>
      </Column>
    </Columns>
  </Scene>
);
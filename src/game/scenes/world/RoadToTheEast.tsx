import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { Columns } from '../../../ui/components/Columns';
import { Column } from '../../../ui/components/Column';
import { BooleanFlag, SceneName } from '../../types';
import road_to_the_east_png from '../../images/road_to_the_east.png';
import { Direction } from '../../../engine/api/GameApi';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';

export const RoadToTheEast = () => {
  const api = useContext(ApiContext);
  const isUnlocked = api.getBoolean(BooleanFlag.JOINED_EARTH_CULT);
  return (
    <Scene title="Road to the East">
      <Columns>
        <Column>
          <Image src={road_to_the_east_png} />
        </Column>
        <Column>
          <p>
            You're looking up at the glorious Temple of Heaven.
          </p>
          {!isUnlocked && (
            <p>
              You're way too scared to go in there, man!
            </p>
          )}
          <Links>
            {isUnlocked && (
              <Link to={SceneName.INSIDE_HEAVEN_TEMPLE}>
                Enter the temple
              </Link>
            )}
            <Link to={SceneName.ROAD_TO_THE_NORTH} direction={Direction.SOUTH}>
              Head back to town
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};
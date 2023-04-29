import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import road_to_town_png from '../../images/road_to_town.png';
import { Columns } from '../../../ui/components/Columns';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';
import { BooleanFlag, QuestName, SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';

export const OutsideTown = () => {
  const api = useContext(ApiContext);
  const isOnFire = api.getBoolean(BooleanFlag.JOINED_EARTH_CULT);

  return (
    <Scene title="Outside Town">
      <Columns>
        <Column>
          <Image src={road_to_town_png} />
        </Column>
        <Column>
          <p>
            You're standing on a dirt road outside the town.
          </p>
          {isOnFire && (
            <p>
              The town is on fire!
            </p>
          )}
          <Links>
            <Link to={SceneName.TOWN}>
              Enter Town
            </Link>
            <Link to={SceneName.ROAD_TO_THE_NORTH}>
              Take the Road to the North
            </Link>
            <Link to={SceneName.ROAD_TO_THE_SOUTH}>
              Take the Road to the South
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};